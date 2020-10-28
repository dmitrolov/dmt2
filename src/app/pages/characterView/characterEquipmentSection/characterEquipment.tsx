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

export const CharacterEquipmentSection: React.FC<CharacterEquipmentSectionProps> = ({ equipment }) => {
    const [adventure, setAdventure] = useState<Adventure>();
    const [newItem, setNewItem] = useState<Item>(initialItem)
    const [isButtonOpen, setIsButtonOpen] = useState(false);

    useEffect(() => {
        getAdventure('Djadame').then((data) => setAdventure(data))
    }, [])

    const addItem = () => {
        if (adventure) {
            // debugger
            const nextAdventure = adventure;
            nextAdventure.customCounter++;
            newItem.id = `DjadameCustomItem${nextAdventure.customCounter}`;
            nextAdventure.itemsList.push(newItem);
            setAdventure(nextAdventure);
            setNewItem({ ...initialItem });
            setIsButtonOpen(false);
            setAdventureToDB('Djadame', adventure);
        }
    }
    return <>
        <div className={'openButtonWrap'}><div className={`openButton ${isButtonOpen ? 'active' : ''}`} onClick={() => { setIsButtonOpen(!isButtonOpen) }}><AddIcon /></div></div>
        {
            isButtonOpen && <div className={'addItemSection'}>
                <Form>
                    <Form.Item validateStatus={'error'} required>
                        <Input
                            placeholder={'Название предмета'}
                            value={newItem.name.ru}

                            onChange={(event) => setNewItem({ ...newItem, name: { en: '', ru: event.target.value } })} />
                    </Form.Item>
                </Form>
                <Input
                            placeholder={'Название предмета'}
                            value={newItem.name.ru}

                            onChange={(event) => setNewItem({ ...newItem, name: { en: '', ru: event.target.value } })} />
                <TextArea
                    placeholder={'Описание предмета'}
                    value={newItem.description.ru}
                    onChange={(event) => setNewItem({ ...newItem, description: { en: '', ru: event.target.value } })}
                    autoSize />
                <div className="addItemFooter">
                    <Input
                        placeholder={'Количество'}
                        disabled
                    />
                    <Input
                        placeholder={'Цена'}
                        value={newItem.cost ? newItem.cost : ''}
                        onChange={(event) => setNewItem({ ...newItem, cost: Number(event.target.value) })} />
                    <Button type={'primary'} onClick={() => { addItem() }}>Add</Button>
                </div>
            </div>
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