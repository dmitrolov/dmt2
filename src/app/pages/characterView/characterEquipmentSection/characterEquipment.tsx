import { Button, Form, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react"
import { getAdventure, setAdventureToDB } from "../../../api/firebase";
import { Adventure } from "../../../types/adventure";
import { CharacterEquipment } from "../../../types/adventure/character";
import { Item } from "../../../types/items";
import AddIcon from '@material-ui/icons/Add';
import './characterEquipment.sass'
import { DeleteOutlined, SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;

interface CharacterEquipmentSectionProps {
    equipment: CharacterEquipment[]
}

interface AddItemFormFields {
    name: string | string[]
    description?: string | string[]
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
        // TODO fix bug if simultaneously try to save items
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
                weight: 0,
                count: values.count
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
                        <Input placeholder={'Количество'}
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
            size='small'
            columns={[
                {
                    title: 'Название',
                    dataIndex: 'name',
                    key: 'name',
                    sorter: (a, b) => a.name[0] > b.name[0] ? 1 : -1
                    // render: (text: React.ReactNode) => <a>text</a>
                },
                {
                    title: 'Кол-во',
                    dataIndex: 'count',
                    key: 'count',
                    sorter: (a, b) => {
                        if (a.count && b.count) {
                            return a.count - b.count
                        } else return 0
                    }
                },
                {
                    key: 'action',
                    render: () => (
                      <Space size='small'>
                        <SendOutlined />
                        <DeleteOutlined />
                      </Space>
                    ),
                  },
            ]}
            expandedRowRender={((record: AddItemFormFields) => <>
                {record.cost && record.cost !== 0
                    ? <p>{`Цена ${Math.trunc(record.cost / 10000)} ЗМ ${Math.trunc(record.cost / 100 % 100)} СМ ${record.cost % 100} ММ`}</p>
                    : undefined}
                {record.description && <p>{record.description}</p>}
            </>)}
            dataSource={
                adventure?.itemsList.map(item => {
                    return {
                        key: item.id,
                        name: item.name.ru,
                        count: item.count,
                        cost: item.cost,
                        description: item.description.ru
                    }
                })
            }
        />
    </>
}