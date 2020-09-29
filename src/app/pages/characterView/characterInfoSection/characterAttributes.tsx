import { Table } from "antd"
import React from "react"
import { CharacterAttributes } from "../../../types/character/about/components/character.attributes.model"

interface CharacterAttributesSectionProps {
    attributes: CharacterAttributes
}

export const CharacterAttributesSection: React.FC<CharacterAttributesSectionProps> = ({ attributes }) => {
    return <>
        <Table
            title={() => 'Характеристики'}
            showHeader={false}
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
                {
                    title: 'Bonus',
                    dataIndex: 'bonus',
                    key: 'bonus',
                }
            ]}
            dataSource={[
                {
                    key: '1',
                    name: 'Сила',
                    count: attributes.strength,
                    bonus: Math.round((attributes.strength - 0.5) / 2 - 5),
                },
                {
                    key: '2',
                    name: 'Ловкость',
                    count: attributes.dexterity,
                    bonus: Math.round((attributes.dexterity - 0.5) / 2 - 5)
                },
                {
                    key: '3',
                    name: 'Телосложение',
                    count: attributes.constitution,
                    bonus: Math.round((attributes.constitution - 0.5) / 2 - 5)
                },
                {
                    key: '4',
                    name: 'Интеллект',
                    count: attributes.intelligence,
                    bonus: Math.round((attributes.intelligence - 0.5) / 2 - 5)
                },
                {
                    key: '5',
                    name: 'Мудрость',
                    count: attributes.wisdom,
                    bonus: Math.round((attributes.wisdom - 0.5) / 2 - 5)
                },
                {
                    key: '6',
                    name: 'Харизма',
                    count: attributes.charisma,
                    bonus: Math.round((attributes.charisma - 0.5) / 2 - 5)
                },
            ]}
        />
    </>
}