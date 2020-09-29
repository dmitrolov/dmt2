import { Table } from "antd"
import React from "react"
import { CharacterAttributes, SkillsProficiency } from "../../../types/character/Character"
import { calculateAttributeBonus } from "./helpers"

interface CharacterAttributesSectionProps {
    attributes: CharacterAttributes,
    skills: SkillsProficiency,
}

export const CharacterAttributesSection: React.FC<CharacterAttributesSectionProps> = ({ attributes, skills }) => {
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
                },
                {
                    title: 'Skills',
                    dataIndex: 'skills',
                    key: 'skills',
                    render: (skillsProficiency: { name: string, value: boolean }[]) => {
                        return skillsProficiency.map((skill) => {
                            return <div style={{color: skill.value ? 'green' : ''}}>{skill.name}</div>
                        })
                    }
                }
            ]}
            dataSource={[
                {
                    key: '1',
                    name: 'Сила',
                    count: attributes.strength,
                    bonus: calculateAttributeBonus(attributes.strength),
                    skills: [
                        { name: 'Атлетика', value: skills.Athletics }
                    ]
                },
                {
                    key: '2',
                    name: 'Ловкость',
                    count: attributes.dexterity,
                    bonus: calculateAttributeBonus(attributes.dexterity),
                    skills: [
                        { name: 'Акробатика', value: skills.Acrobatics },
                        { name: 'Ловкость рук', value: skills.SleightOfHand },
                        { name: 'Скрытность', value: skills.Stealth }
                    ]
                },
                {
                    key: '3',
                    name: 'Телосложение',
                    count: attributes.constitution,
                    bonus: calculateAttributeBonus(attributes.constitution),
                    skills: [
                        { name: 'Выносливость', value: skills.Endurance }
                    ]
                },
                {
                    key: '4',
                    name: 'Интеллект',
                    count: attributes.intelligence,
                    bonus: calculateAttributeBonus(attributes.intelligence),
                    skills: [
                        { name: 'Анализ', value: skills.Investigation },
                        { name: 'История', value: skills.History },
                        { name: 'Магия', value: skills.Arcana },
                        { name: 'Природа', value: skills.Nature },
                        { name: 'Религия', value: skills.Religion }
                    ]
                },
                {
                    key: '5',
                    name: 'Мудрость',
                    count: attributes.wisdom,
                    bonus: calculateAttributeBonus(attributes.wisdom),
                    skills: [
                        { name: 'Внимательность', value: skills.Perception },
                        { name: 'Выживание', value: skills.Survival },
                        { name: 'Медицина', value: skills.Medicine },
                        { name: 'Проницательность', value: skills.Insight },
                        { name: 'Уход за животными', value: skills.AnimalHandling },
                    ]
                },
                {
                    key: '6',
                    name: 'Харизма',
                    count: attributes.charisma,
                    bonus: calculateAttributeBonus(attributes.charisma),
                    skills: [
                        { name: 'Выступление', value: skills.Performance },
                        { name: 'Запугивание', value: skills.Intimidation },
                        { name: 'Обман', value: skills.Deception },
                        { name: 'Убеждение', value: skills.Persuasion },
                    ]
                },
            ]}
        />
    </>
}