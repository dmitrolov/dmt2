import { Table } from "antd";
import React from "react"
import { allItems } from "../../../api/allitems";
import { CharacterEquipment } from "../../../types/adventure/character";

interface CharacterEquipmentSectionProps {
    equipment: CharacterEquipment[]
}

export const CharacterEquipmentSection: React.FC<CharacterEquipmentSectionProps> = ({ equipment }) => {
    let quaterstaf: any;
    allItems.forEach((item, index) => {
        console.log(item, index)
    })
    return <>
        <Table
            title={() => 'Инвентарь'}
            showHeader={true}
            pagination={false}
            style={{ width: '100%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    // render: (text: React.ReactNode) => <a>text</a>
                },
                {
                    title: 'Count',
                    dataIndex: 'count',
                    key: 'count',
                },
            ]}
            expandedRowRender={((record: any) => <>
                <p>{record.description.id}</p>
                <pre>{JSON.stringify(record.description.en.img)}</pre>
                <img src={`../../../../../../img/items/${record.description.en.img}`} alt="quaterstaf" />
            </>)}
            dataSource={[
                {
                    key: '1',
                    name: equipment[0].id,
                    count: equipment[0].count,
                    description: allItems[0]
                },
                {
                    key: '2',
                    name: equipment[0].id,
                    count: equipment[0].count,
                    description: allItems[1]
                },
            ]}
        />
    </>
}