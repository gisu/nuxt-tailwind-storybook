## ModalPorter
A Vue-Portal module for modals, but mainly used to map the basic functionality 


### Props
- `target [string]`: Target Portal
- `openState [boolean]`: State of the modal
- `screenColor [string]`: Background color of the active modal background
- `modalColor [string]`: Background color of the modal
- `modalStyle [string]`: Style of the modal
- `modalWidth [string]`: Width of the modal
- `lockScroll [boolean]`: When the modal is active, the body can no longer scroll
- `scrollable [boolean]`: The Porter is now scrollable (for oversized modals)
- `desktopCentered [boolean]`: Content is centered
- `customClose [boolean]`: This disables the embedded Close button to use your own Close functions

### Events
- `closeModal`: Der Close Event

### Code
```jsx
<button @click="modalState = true"> Open Modal </button>

<ModalPorter
  :open-state="modalState"
  modal-style="rounded mx-4"
  modal-width="max-w-md w-full p-10"
  @closeModal="modalState = false"
>
  Hello World
</ModalPorter>
```
