# Flasky Front End Live Code

In this live code, we will be working with state & events in React.  Then we will use the `useEffect` hook to update state from an API and persist state to an API with events.

## Learning Goals

The goals of this live code are to:

- Gain an ability to use State in a React component and pass information to other components via props
- Use the `useEffect` hook to update state after the component first mounts
- Use `axios` to make API calls to update state
- Write controlled form components

## Flasky Back End

The features described in each wave of this live code are intended to work with the Flasky back-end created during C16. Your instructors will be using a version of the Flasky back end specific to your cohort. The underlying structure will follow the same pattern that we see in the directions, but some of the specific features or model names for your cohort's version may differ from what's described in the directions.

To follow along, clone the cohort-specific repository of Flasky that your instructors provide. This allows you to run the same version of the back end used during the live codes on your machine.

**Note: Though your cohort may use not have a(n) object/model `Dog`, the React skills you’ll be practicing remain the same regardless of the back-end details.**

## Wave 00: Components and Props

In this wave, we will implement the `Dog` and `DogList` components.

A `Dog` has the following attributes and props: 
- `id`
- `name`
- `age`
- `breed`
- `chip` (defaults to an empty string)

## Wave 01: State and Event Handling

In this wave, we will implement behavior to add a `chip` to a dog. The `chip` should be a random number between 1000 and 9999. The state of a `Dog` will be managed by the `Dog` component.

## Wave 02: Lifting State Up

In this wave, we will lift up state to the `App`. `App` should pass a callback function through `DogList` to `Dog` to implement the `addChip` behavior.

We will also implement a function in `App` to delete a Dog.

## Wave 03:  useEffect And Axios

### API EndPoints:

The API is active on Render at [`https://ada-flasky.onrender.com`](https://ada-flasky.onrender.com).

| Verb  | Path  | Body of Request | What it does  |
|---|---|---|---|
| `GET`  | `/dogs`  | None | Retrieves a list of all dogs  |
| `PATCH`  | `/dogs/<dog_id>/add_chip`  | None  | Adds a randomly generated chip string to dog   |
| `POST`  | `/dogs`  | `{ name: dogName, age: dogAge, breed: dogBreed }`  | Creates a new Dog  |
| `DELETE`  | `/dogs/<dog_id>`  | None  | Deletes a dog |

### Make Axios requests in `App.js`

We will:

- use the `useEffect` hook to make an API call to get the list of dogs initially.
- update the callback functions to allow us to delete or add a chip to dogs.

## Wave 04: Adding a Form

In this wave, we will add a new component to our App,  `DogForm`.  In this component users will be able to add a new dog, persisting the data to the API.
