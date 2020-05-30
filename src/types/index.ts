export type Data = { [key: string]: any }
export type ExtraTableData = {
  [key: string]: (row: Data, index: number, data: Data[]) => JSX.Element
}
