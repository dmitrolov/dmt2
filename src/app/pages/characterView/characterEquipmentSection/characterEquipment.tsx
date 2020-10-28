import { Button, Form, Input, Table } from "antd";
import React, { useEffect, useState } from "react"
import { getAdventure, setAdventureToDB } from "../../../api/firebase";
import { Adventure } from "../../../types/adventure";
import { CharacterEquipment } from "../../../types/adventure/character";
import { Item } from "../../../types/items";
import AddIcon from '@material-ui/icons/Add';
import './characterEquipment.sass'

const { TextArea } = Input;

interface CharacterEquipmentSectionProps {
    equipment: CharacterEquipment[]
}

const initialItem: Item = {
    id: '',
    cost: 0,
    description: {
        en: '',
        ru: '',
    },
    name: {
        en: '',
        ru: '',
    },
    rarity: 'common',
    type: 'itemsPack',
    weight: 0
}

interface AddItemFormFields {
    name: string
    description?: string
    count?: number
    cost?: number
}

export const CharacterEquipmentSection: React.FC<CharacterEquipmentSectionProps> = ({ equipment }) => {
    const [adventure, setAdventure] = useState<Adventure>();
    const [isButtonOpen, setIsButtonOpen] = useState(false);

    useEffect(() => {
        getAdventure('Djadame').then((data) => setAdventure(data))
    }, [])

    const addItem = (values: AddItemFormFields) => {
        if (adventure) {
            const nextAdventure = adventure;
            nextAdventure.customCounter++;
            const newItem: Item = {
                id: `DjadameCustomItem${nextAdventure.customCounter}`,
                cost: values.cost || 0,
                description: {
                    en: '',
                    ru: values.description || '',
                },
                name: {
                    en: '',
                    ru: values.name,
                },
                rarity: 'common',
                type: 'itemsPack',
                weight: 0
            }
            nextAdventure.itemsList.push(newItem);
            setAdventure(nextAdventure);
            setIsButtonOpen(false);
            setAdventureToDB('Djadame', adventure);
        }
    }
    return <>
        <div className={'openButtonWrap'}><div className={`openButton ${isButtonOpen ? 'active' : ''}`} onClick={() => { setIsButtonOpen(!isButtonOpen) }}><AddIcon /></div></div>
        {
            isButtonOpen && <Form
                className={'addItemSection'}
                name={'addItem'}
                onFinish={addItem}
                onFinishFailed={(errors) => { console.log(errors) }}>
                <Form.Item
                    name={'name'}
                    rules={[{ required: true, message: 'Название не должно быть пустым' }]}>
                    <Input placeholder={'Название предмета'} />
                </Form.Item>
                <Form.Item name={'description'}>
                    <TextArea placeholder={'Описание предмета'} autoSize />
                </Form.Item>
                <div className="addItemFooter">
                    <Form.Item name={'count'}>
                        <Input placeholder={'Количество'} disabled
                        />
                    </Form.Item>
                    <Form.Item name={'cost'}>
                        <Input placeholder={'Цена'} />
                    </Form.Item>
                    <Form.Item>
                        <Button type={'primary'} htmlType="submit">Add</Button>
                    </Form.Item>
                </div>
            </Form>
        }
        <Table
            title={() => 'Инвентарь'}
            showHeader={true}
            pagination={false}
            style={{ width: '100%' }}
            columns={[
                {
                    title: 'Название',
                    dataIndex: 'name',
                    key: 'name',
                    // render: (text: React.ReactNode) => <a>text</a>
                },
                {
                    title: 'Количество',
                    dataIndex: 'count',
                    key: 'count',
                },
            ]}
            expandedRowRender={((record: any) => <>
                {record.cost && <p>Цена {record.cost}</p>}
                {record.description && <p>{record.description}</p>}
            </>)}
            dataSource={
                adventure?.itemsList.map(item => {
                    return {
                        key: item.id,
                        name: item.name.ru,
                        count: 1,
                        cost: item.cost,
                        description: item.description.ru
                    }
                })
            }
        />
    </>
}