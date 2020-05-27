import { useEffect, useState } from 'react'
import { Data, ExtraTableData } from 'types'
import { isBoolean, isNumber, isString } from 'helpers/typecheck'

export default function useUniqueKeys(
  data: Data[],
  exclude?: string[],
  extraData?: ExtraTableData,
): string[] {
  const [keys, setKeys] = useState<string[]>([])
  useEffect(() => {
    if (!data) {
      return setKeys([])
    }

    // generate the array of keys from all objects
    let arr = Object.keys(
      data.reduce((result, obj) => Object.assign(result, obj), []),
    )

    // test the 1st object for any keys that cant be rendered
    arr = arr.filter((key: string) => {
      const value = data[0][key]
      const isRenderable =
        isNumber(value) || isString(value) || isBoolean(value)
      return isRenderable
    })

    // add keys from the extra data prop
    if (extraData) {
      arr = [...arr, ...Object.keys(extraData)]
    }

    // remove unwanted keys from the exclude array
    if (exclude) {
      arr = arr.filter((key) => !exclude.includes(key))
    }
    setKeys(arr)
  }, [data, exclude, extraData])
  return keys
}
