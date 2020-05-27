export type Data = { [key: string]: any }
export type ExtraTableData = {
  [key: string]: (data: Data) => JSX.Element
}
