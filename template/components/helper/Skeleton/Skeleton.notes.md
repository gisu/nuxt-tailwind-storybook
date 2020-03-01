## Skeleton
Creates a background loading element for content that is to be reloaded.

### Props
- `maxWidth [number]`: Maximum width
- `minWidth [number]`: Minimum width
- `width [string]`: Width of the element
- `height [string]`: Height of the element
- `round [boolean]`: If the element is to be completely round
- `fullSize [boolean]`: If the skeleton is to assume the full size of the outer container

### Code
```html
<Skeleton 
  :maxWidth="400" 
  :minWidth="80" 
  :round="true"
  width="100px" 
  height="100px" 
/>
```
