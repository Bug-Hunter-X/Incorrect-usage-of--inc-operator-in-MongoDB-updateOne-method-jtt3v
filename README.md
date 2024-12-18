# Incorrect usage of $inc operator in MongoDB updateOne method
This repository demonstrates a common error when using the `$inc` operator with the `updateOne` method in MongoDB. The issue arises from improper handling of the update operation, leading to unexpected behavior.
## Problem
The primary problem lies in using `$inc` to increment a field when that field might not yet exist in the document. If the field is missing, `$inc` won't create it and the update operation will fail silently.
## Solution
The solution involves using the `$inc` operator in conjunction with the `$setOnInsert` operator to ensure the field is created if it doesn't exist, and the `$inc` operator increments the value correctly if it already exists.  This guarantees the expected result even in the case of a new document.