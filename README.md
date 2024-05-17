# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Testing app in web

   ```bash
    npx expo start --web
   ```

This code is developed fully in typescript. All screens of this project are included in app folder, which are:

**index.tsx**, **home.tsx**, **product.tsx**

**index.tsx** is accesible on default route "/", so that user on web can open it with url (provided metro bundler is running) [localhost:8081/](localhost:8081/)

**home.tsx** for Home page renders on "/home" path [localhost:8081/home](localhost:8081/home)

Similarly product page renders on [localhost:8081/product](localhost:8081/product)

The home page, which is contained in index page, displays a banner, under which there are 2 collections, each showing images of 2 products

When user in home page clicks on any product image, it passes the product json as params to the product page while navigating to it through **expo-router**

That JSON is used to show the featured image of the product, and the the image of 3 of its variants, which are clickable buttons

On clicking any such variant image button in product page, the variant title, gets stored in some state, so that when the user then clicks the **ADD TO CART** button, it shows the title of the selected variant as toast message

Two sepearate components **variants.tsx**, and **collections.tsx** created in components folder, to add some modularity in code.