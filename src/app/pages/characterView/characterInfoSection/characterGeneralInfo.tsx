import { Table } from "antd"
import React from "react"
import { CharacterDescription } from "../../../types/character/about/components/character.description.model"
import { CharacterInfo } from "../../../types/character/about/components/character.info.model"

interface CharacterGeneralInfoSectionProps {
    info: CharacterInfo
    description: CharacterDescription
}

export const CharacterGeneralInfoSection: React.FC<CharacterGeneralInfoSectionProps> = ({info, description}) => {
    return <>
        <Table
            title={() => 'Основная информация'}
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
                    title: 'value',
                    dataIndex: 'value',
                    key: 'value',
                }
            ]}
            dataSource={[
                {
                    key: 'playerName',
                    name: 'Имя игрока',
                    value: info.playerName
                },
                {
                    key: 'characterName',
                    name: 'Имя персонажа',
                    value: info.characterName
                },
                {
                    key: '1',
                    name: 'Расса (подвид)',
                    value: info.subRace
                },
                {
                    key: '2',
                    name: 'Пол',
                    value: description.sex
                },
                {
                    key: '3',
                    name: 'Возраст',
                    value: description.age.human
                },
                {
                    key: '4',
                    name: 'Рост',
                    value: description.height
                },
                {
                    key: '5',
                    name: 'Вес',
                    value: description.weight
                },
                {
                    key: '6',
                    name: 'Предистория',
                    value: info.background
                },
            ]}
        />
    </>
}