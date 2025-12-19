---
sidebar_position: 9
---

# BAExcelUpload Component

##  Dependencies

### External Libraries
*   **xlsx** (SheetJS): Core library for reading and parsing Excel files.
*   **antd**: Provides `message` for notifications and `UploadOutlined` icon.

### Internal Components
*   **`<BAModal />`**: Used to display the upload interface.
*   **`<BAButton />`**: The trigger buttons for opening the modal and for actions within the modal.
*   **`<BALoader />`**: Used for showing loading states.
*   **`<BABox />`**: General purpose container.

## ️ Usage

The component is typically rendered as a button in a toolbar or form. You must provide the `onPickRecords` handler to receive the parsed data.

### Example

```javascript
import React from 'react';
import BAExcelUpload from '@site/src/components/BAExcelUpload';

function ImportDataModule() {
    const handleImportedData = (dataArray) => {
        console.log("Received structured data:", dataArray);
        // Process the data, e.g., send it to an API for bulk insert
        if (dataArray && dataArray.length > 0) {
            alert(`Successfully parsed ${dataArray.length} records.`);
        }
    };

    return (
        <BAExcelUpload
            onPickRecords={handleImportedData}
            sampleFileName="product_template.xlsx"
            sampleFileURL="/public/templates/product_import_sample.xlsx"
        />
    );
}
export default ImportDataModule;
```

## ️ Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `onPickRecords` | `(data: object[]) => void` | N/A | **Required**. Callback function that receives the final array of JSON objects parsed from the Excel file. |
| `sampleFileURL` | string | `"./invoice_import_template_final.xlsx"` | The local/public path to the sample Excel template file. Used if `fileDownloadApi` is not provided. |
| `fileDownloadApi` | string | `undefined` | The API endpoint URL (or path) used to fetch the sample template file from the server. Takes precedence over `sampleFileURL`. |
| `sampleFileName` | string | `"sample_template.xlsx"` | The name to use when downloading the sample file. |

##  Internal Logic Details

### Data Extraction (onDrop)
*   **File Validation**: Checks that the selected file type is a valid Excel format (.xlsx, .xls).
*   **Reading**: Uses `FileReader` to read the file as a binary string.
*   **Parsing**: `XLSX.read()` and `XLSX.utils.sheet_to_json(sheet)` are used to convert the data.
*   **Header Mapping**: The component uses the first sheet and automatically maps rows to JSON objects based on the header row.

### Sample File Download (downloadFile)
The component prioritizes server-side file retrieval:
1.  If `fileDownloadApi` is provided, it constructs a full URL and triggers a download.
2.  If `fileDownloadApi` is absent, it falls back to downloading the file from the path specified by `sampleFileURL` (assumed to be a public folder resource).
