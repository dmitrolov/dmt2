import { Table } from "antd"
import React from "react"
import { CharacterAction, CharacterClass } from "../../../types/character/Character"

interface CharacterExperienceSectionProps {
    classes: CharacterClass[];
    action: CharacterAction;
}

export const CharacterExperienceSection: React.FC<CharacterExperienceSectionProps> = ({ classes, action }) => {
    return <>
        <Table
            title={() => 'Класс'}
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
                    title: 'Level',
                    dataIndex: 'level',
                    key: 'level',
                }
            ]}
            dataSource={classes.map((characterClass) => {
                return {
                    key: characterClass.name,
                    name: characterClass.name,
                    level: characterClass.level
                }
            })}
        />
        <Table
            title={() => 'Другое'}
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
                    title: 'Value',
                    dataIndex: 'value',
                    key: 'value',
                }
            ]}
            dataSource={[
                {
                    key: 'exp',
                    name: 'Опыт',
                    value: action.experience
                },
                {
                    key: 'bonus',
                    name: 'Бонус мастерства',
                    value: action.bonus
                },
                {
                    key: 'inspiration',
                    name: 'Вдохновение',
                    value: action.inspiration ? 'Есть' : 'Нет'
                },
            ]}
        />
    </>
}