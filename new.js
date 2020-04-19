var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["l"] = document.getElementById("l").value;
    formData["c"] = document.getElementById("c").value;
    formData["e"] = document.getElementById("e").value;
    formData["s"] = document.getElementById("s").value;
    formData["f"] = document.getElementById("f").value;
    formData["k"] = document.getElementById("k").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.l;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.c;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.e;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.s;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.f;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.k;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
   
    document.getElementById("l").value = "";
    document.getElementById("c").value = "";
    document.getElementById("e").value = "";
    document.getElementById("s").value = "";
    document.getElementById("f").value = "";
    document.getElementById("k").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    
    document.getElementById("l").value = selectedRow.cells[0].innerHTML;
    document.getElementById("c").value = selectedRow.cells[1].innerHTML;
    document.getElementById("e").value = selectedRow.cells[2].innerHTML;
    document.getElementById("s").value = selectedRow.cells[3].innerHTML;
    document.getElementById("f").value = selectedRow.cells[4].innerHTML;
    document.getElementById("k").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.l;
    selectedRow.cells[1].innerHTML = formData.c;
    selectedRow.cells[2].innerHTML = formData.e;
    selectedRow.cells[3].innerHTML = formData.s;
    selectedRow.cells[4].innerHTML = formData.f;
    selectedRow.cells[5].innerHTML = formData.k;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("l").value == "") {
        isValid = false;
        document.getElementById("lValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("lValidationError").classList.contains("hide"))
            document.getElementById("lValidationError").classList.add("hide");
    }
    return isValid;
}