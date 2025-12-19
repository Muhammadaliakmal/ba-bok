---
sidebar_position: 20
---

# BARadio Component

##  Dependencies

*   **antd**: Provides the core UI components: `<Radio.Group />` and `<Typography />`.

## ️ Usage

The component is controlled, meaning it requires a `value` and an `onChange` handler for state management. The selection options must be provided via the `options` array.

### Example

```javascript
import React, { useState } from 'react';
import BARadio from '@site/src/components/BARadio';

function RadioForm() {
    const [selection, setSelection] = useState('red');

    const colorOptions = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ];

    const handleChange = (e) => {
        setSelection(e.target.value);
        console.log('New value:', e.target.value);
    };

    return (
        <BARadio
            label="Select a Color"
            required={true}
            options={colorOptions}
            value={selection}
            onChange={handleChange}
        />
    );
}
export default RadioForm;
```

## ️ Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `options` | `object[]` | **Required**. An array defining the radio buttons available for selection. |
| `value` | any | The currently selected value of the radio group (must match one of the `options.value`). |
| `onChange` | `(event) => void` | Callback function triggered when a radio button is selected. The value is accessed via `event.target.value`. |
| `label` | string | Optional text displayed as a title above the radio group. |
| `required` | boolean | If true, adds a red asterisk next to the label to indicate a required field. |
| `disabled` | boolean | Disables the entire radio group, preventing any selection. |

## ️ options Array Structure

Each object in the `options` array must contain the following keys:

| Key | Type | Description |
| :--- | :--- | :--- |
| `label` | `React.ReactNode` \| string | The content displayed next to the radio button. |
| `value` | any | The unique value returned by `onChange` when this option is selected. |

##  Labeling and Required Indicator

The `BARadio` component uses Ant Design's `Typography.Title` (level 5) to render the label.

If the `required` prop is set to `true`, a styled **red asterisk (*)** is automatically appended to the label, ensuring form consistency without manual styling of required indicators.
