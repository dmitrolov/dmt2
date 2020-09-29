import { Table } from "antd"
import { info } from "console"
import React from "react"
import { CharacterProficiency } from "../../../types/character/Character"

interface CharacterProficiencySectionProps {
    proficiency: CharacterProficiency;
}

export const CharacterProficiencySection: React.FC<CharacterProficiencySectionProps> = ({ proficiency }) => {
    return <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Table
            title={() => 'Языки'}
            showHeader={false}
            pagination={false}
            style={{ width: '50%', marginBottom: 16}}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                }
            ]}
            dataSource={proficiency.languages.length
                ? proficiency.languages.map((value) => {
                    return {
                        key: value,
                        name: value
                    }
                })
                : [{
                    key: 'feat',
                    name: 'Нет'
                }]
            }
        />
        <Table
            title={() => 'Инструменты'}
            showHeader={false}
            pagination={false}
            style={{ width: '50%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                }
            ]}
            dataSource={proficiency.tools.length
                ? proficiency.tools.map((value) => {
                    return {
                        key: value,
                        name: value
                    }
                })
                : [{
                    key: 'feat',
                    name: 'Нет'
                }]
            }
        />
        <Table
            title={() => 'Оружие'}
            showHeader={false}
            pagination={false}
            style={{ width: '50%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                }
            ]}
            dataSource={proficiency.weapons.length
                ? proficiency.weapons.map((value) => {
                    return {
                        key: value,
                        name: value
                    }
                })
                : [{
                    key: 'feat',
                    name: 'Нет'
                }]
            }
        />
        <Table
            title={() => 'Доспехи'}
            showHeader={false}
            pagination={false}
            style={{ width: '50%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                }
            ]}
            dataSource={proficiency.armor.length
                ? proficiency.armor.map((value) => {
                    return {
                        key: value,
                        name: value
                    }
                })
                : [{
                    key: 'feat',
                    name: 'Нет'
                }]
            }
        />
    </div>
}