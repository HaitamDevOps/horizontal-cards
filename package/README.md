# Hozirontal Cards package

## Overview

The inspiration behind this React package stems from the observed absence of a convenient horizontal scroller list component in the React ecosystem. This package addresses this gap by providing a seamless solution to display items from a list in the form of infinitely scrolled cards. If you're looking to enhance user experience by incorporating a horizontal scrolling feature for your lists, this package is tailored to meet your needs.


<p align="center" width="100%"><img src="https://raw.githubusercontent.com/HaitamDevOps/horizontal-cards/main/assets/demo-1.png"></p>

## Features

* **Horizontal Scrolling:** Easily implement a horizontal scrolling list of items, offering a modern and intuitive user interface.
* **Infinite Scroll:** The package enables the infinite scrolling of cards, providing a smooth and continuous browsing experience for users.
* **Customizable:** Tailor the appearance and behavior of the scroller to align with your application's design and requirements.
* **Efficient Rendering:** Benefit from optimized rendering to ensure a responsive and performant user interface, even when dealing with large datasets.

## Installation

To integrate the Horizontal Cards into your project, follow these simple steps:

```shell
npm install horizontal-cards
```

or

```shell
yarn add horizontal-cards
```

## Usage

To effectively integrate the package into your project, it is recommended to follow these three straightforward steps.

1. **Import the HorizontalCards component:**

Import the `HorizontalCards` component from the package in your file as demonstrated below:

```javascript
import HorizontalCards from 'horizontal-cards';
```

2. **Prepare Your Display List:**

Create a list that you intend to display using the `HorizontalCards` component. The list should be an array of objects, each containing "title" and "description" properties.

For instance:

```javascript
const inputList = [
	{title: "Item1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
	{title: "Item2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
	{title: "Item3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
	{title: "Item4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
];
```

3. **Insert the HorizontalCards Component:**

Finally, insert the `HorizontalCards` component into your code and provide your prepared list to the `data` prop. Here's an example:

```javascript
<HorizontalCards data = {inputList} />
```

Feel free to explore additional props available for customization, which are detailed in the props table. Customize the appearance and behavior of the `HorizontalCards` component by choosing the right colors to suit your project's needs.

## Props table

| Name             | Type     | Default | Description                                                                                                  |
| ---------------- | -------- | :-----: | ------------------------------------------------------------------------------------------------------------ |
| data             | Object[] |   ---   | Refers to the input list that will be displayed as a scrolled horizontal list of cards                       |
| bgColor          | String   | #333C4A | Refers to the background color of the cards                                                                  |
| lineColor        | String   |  gray  | Refers to the color of the line in the middle of the cards and the color of the right and left arrow buttons |
| titleColor       | String   |  white  | Refers to the color of the titles of the items in the list                                                   |
| descriptionColor | String   |  white  | Refers to the color of the description of the items in the list                                              |

## Example

```javascript
import HorizontalCards from 'horizontal-cards';
function App() {
  const inputList = [
    {title: "Item1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {title: "Item2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {title: "Item3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {title: "Item4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
  ];
  return (
    <div className="App">
      <HorizontalCards 
        data = {inputList}
        bgColor="black"
        lineColor="#5e5e5e"
        titleColor="white"
        descriptionColor="#f5e7c9"
      />
    </div>
  );
}

export default App;
```

## License

Horizontal Cards package is released under the [MIT license](https://www.mit.edu/~amini/LICENSE.md).
