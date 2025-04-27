export function realPrice(price: number) {
  if(price === undefined || isNaN(price)) {
    return "Invalid price!"
  }
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}