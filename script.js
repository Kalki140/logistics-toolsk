function showForm(type) {
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('form-title').innerText = `New ${type.charAt(0).toUpperCase() + type.slice(1)} Shipment`;
  document.getElementById('shipment-type').value = type;
}

document.getElementById('shipment-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const shipment = {
    type: document.getElementById('shipment-type').value,
    shipper: document.getElementById('shipper-name').value,
    consignee: document.getElementById('consignee-name').value,
    description: document.getElementById('description').value,
    weight: document.getElementById('weight').value,
    date: document.getElementById('date').value
  };

  console.log("Shipment Created:", shipment);
  alert("Shipment created successfully!");

  this.reset();
  document.getElementById('form-container').style.display = 'none';
});
