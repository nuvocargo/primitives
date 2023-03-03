import {merge} from '../../../src/utils-v1'
import lightComponentVars from '../vars/component_light'
import lightDeprecatedVars from '../vars/deprecated_light'
import lightGlobalVars from '../vars/global_light'
import lightMarketingVars from '../vars/marketing_light'
import lightAppVars from '../vars/app_light'

const scale = {
  black: '#1B1F23',
  white: '#ffffff',
  gray: ['#FAFBFC', '#F6F8FA', '#E1E4E8', '#D1D5DA', '#959DA5', '#6A737D', '#586069', '#444D56', '#2F363D', '#24292E'],
  blue: ['#ECEFF8', '#C5CFE9', '#9FB0DB', '#6580C5', '#3E60B7', '#3856A5', '#324D92', '#2B4380', '#253A6E', '#1F305C'],
  green: ['#EAF1EF', '#C1D5CF', '#98BAB0', '#599080', '#307460', '#2B6856', '#265D4D', '#225143', '#1B473F', '#183A30'],
  yellow: [
    '#FFFBEB',
    '#FFF2C2',
    '#FFE999',
    '#FFDB5B',
    '#FFD232',
    '#E6BD2D',
    '#CCA828',
    '#B39323',
    '#997E1E',
    '#806919'
  ],
  orange: [
    '#FFF8F2',
    '#FFEBDA',
    '#FFD1AC',
    '#FFAB70',
    '#FB8532',
    '#F66A0A',
    '#E36209',
    '#D15704',
    '#C24E00',
    '#A04100'
  ],
  red: ['#FAE7E9', '#F0B8BE', '#E78893', '#D84151', '#CE1126', '#B90F22', '#A50E1E', '#900C1B', '#7C0A17', '#670913'],
  purple: [
    '#F5F0FF',
    '#E6DCFD',
    '#D1BCF9',
    '#B392F0',
    '#8A63D2',
    '#6F42C1',
    '#5A32A3',
    '#4C2888',
    '#3A1D6E',
    '#29134E'
  ],
  pink: ['#FFEEF8', '#FEDBF0', '#F9B3DD', '#F692CE', '#EC6CB9', '#EA4AAA', '#D03592', '#B93A86', '#99306F', '#6D224F'],
  coral: [
    '#fff0eb',
    '#ffd6cc',
    '#ffb4a1',
    '#fd8c73',
    '#ec6547',
    '#c4432b',
    '#9e2f1c',
    '#801f0f',
    '#691105',
    '#510901'
  ]
}

// const exceptions = {
//   Please avoid adding exceptions to this base theme.
//   Otherwise the exceptions will also propagate to all other extended themes.
// }

export default merge(lightDeprecatedVars, lightAppVars, lightMarketingVars, lightComponentVars, lightGlobalVars, {scale})
