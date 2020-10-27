import { Table } from "antd"
import React from "react"
import { CharacterAction, CharacterAttributes, CharacterEffects, CharacterStats } from "../../../types/adventure/character"
import { calculateAttributeBonus } from "./helpers"

interface CharacterCombatSectionProps {
    action: CharacterAction;
    attributes: CharacterAttributes;
    stats: CharacterStats;
    effects: CharacterEffects
}

export const CharacterCombatSection: React.FC<CharacterCombatSectionProps> = ({ action, attributes, stats, effects }) => {
    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Table
            title={() => 'Боевые навыки'}
            showHeader={false}
            pagination={false}
            style={{ width: '100%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'value',
                    dataIndex: 'value',
                    key: 'value',
                }
            ]}
            dataSource={[
                {
                    key: 'passiveWisdom',
                    name: 'Пассивная мудрость',
                    value: 10 + calculateAttributeBonus(attributes.wisdom),
                },
                {
                    key: 'armour',
                    name: 'Клас доспеха',
                    value: action.armorClass
                },
                {
                    key: 'initiative',
                    name: 'Бонус инициативы',
                    value: stats.initiative
                },
                {
                    key: 'speed',
                    name: 'Скорость',
                    value: stats.speed
                },
                {
                    key: 'size',
                    name: 'Размер',
                    value: stats.size
                },
                {
                    key: 'darkVision',
                    name: 'Темное зрение',
                    value: stats.darkVision
                },
            ]}
        />
        <Table
            title={() => 'Хитпоинты'}
            showHeader={false}
            pagination={false}
            style={{ width: '50%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'value',
                    dataIndex: 'value',
                    key: 'value',
                }
            ]}
            dataSource={[
                {
                    key: 'hitPoints.max',
                    name: 'Максимум',
                    value: action.hitPoints.max
                },
                {
                    key: 'hitPoints.temp',
                    name: 'Временные',
                    value: action.hitPoints.temp
                },
                {
                    key: 'hitPoints.current',
                    name: 'Текущие',
                    value: action.hitPoints.current
                }
            ]}
        />
        <Table
            title={() => 'Спасброски от смерти'}
            showHeader={false}
            pagination={false}
            style={{ width: '50%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'value',
                    dataIndex: 'value',
                    key: 'value',
                }
            ]}
            dataSource={[
                {
                    key: 'deathSaves.successes',
                    name: 'Успех',
                    value: action.deathSaves.successes
                },
                {
                    key: 'deathSaves.failures',
                    name: 'Провал',
                    value: action.deathSaves.failures
                }
            ]}
        />
        <Table
            title={() => 'Бонусы'}
            showHeader={false}
            pagination={false}
            style={{ width: '50%' }}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    render: (args) => {
                        return args.value.map((value: any) => {
                            return `${value}, `
                        })
                    }
                }
            ]}
            dataSource={[
                {
                    key: 'savingThrows',
                    name: 'Спасброски',
                    value: effects.savingThrows
                },
                {
                    key: 'resistance',
                    name: 'Сопротивление',
                    value: effects.resistance
                },
                {
                    key: 'immunity',
                    name: 'Имунитеты',
                    value: effects.immunity
                },
            ]}
        />
    </div>
}