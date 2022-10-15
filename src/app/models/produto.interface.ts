export interface Produto {
  id?: number, // O "?" significa que pode ser um dado opcional
  description: string,
  quantity: number,
  price: number,
  total?: number
}
