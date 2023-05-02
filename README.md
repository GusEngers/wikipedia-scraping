# Wikipedia-Scraping

Proyecto con la finalidad de practicar Web Scraping haciendo uso de la página web de Wikipedia. Dado la finalidad que puede llegar a tener el Web Scraping **se informa que este proyecto utiliza estas técnicas para extraer información de Wikipedia con fines exclusivamente educativos y sin ánimo de lucro**.

## Endpoints
**GET -** `/languages`<br>
Lista de lenguajes disponibles en la página de Wikipedia.<br>
`200`

```Typescript
[
  {
    "name": string, // Nombre del idioma
    "value": string // Prefijo del idioma
  }, 
  ...
]
```
`500`

```Typescript
"Ups! An error has occurred!"
```
<br>

**GET -** `/search`<br>
Lista de hasta 20 resultados según el idioma y el texto a buscar.<br>
`body`
```Typescript
{
  "language": string, // Prefijo del idioma en el cual se realizará la búsqueda
  "query": string // Palabra u oración a buscar en Wikipedia
}
```
`200`

```Typescript
[
  {
    "name": string, // Título del resultado
    "value": string // Url con destino a la página del resultado
  }, 
  ...
]
```
`500`

```Typescript
"Error: Missing parameters!"
```
`500`

```Typescript
"Ups! An error has occurred!"
```
<br>

**GET -** `/detail`<br>
Detalle de una página donde se obtienen su título y los textos de todas las etiquetas "p" de la página en cuestión.<br>
`body`
```Typescript
{
  "url": string // Url de la página a obtener los datos
}
```
`200`

```Typescript
[
  {
    "title": string, // Título de la página
    "text": string // Textos de todas las etiquetas "p" de la página
  }, 
  ...
]
```
`500`

```Typescript
"Error: Missing parameters!"
```
`500`

```Typescript
"Ups! An error has occurred!"
```
