// https://www.regextutorial.org/regex-for-numbers-and-ranges.php
const regexp_0_100 = '\b([1-9]|[1-9][0-9]|100)\b'
const regexp_0_100_dot = '\b([1-9]|[1-9][0-9]|100)\b. '
const regexp_empty = '/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm'

/**
 * pattern = true  при значенимях от 8 до 30
 */
enum Constants {
    pattern = '/^([8-9]|[12][0-9]|3[0])/'
}

/**
 * .* - любое количество символов
 */
 '/import \{ Provider.* from 'mobx-react'/'
