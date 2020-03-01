## Dimensions
Returns the width and height of the container

### Slot Scope
- `width [TYPE]`: DESCRIPTION
- `height [TYPE]`: DESCRIPTION

### Code
```jsx
<Dimensions>
  <h3
    slot-scope="{ width }"
    :class="[width > 400 ? 'bg-red' : '']"
  >
    ...
  </h3>
</Dimensions>
```
