// Placeholder for future JS features
console.log("Script loaded.");

function showModel(model) {
  const imageMap = {
    cnn: 'images/cnn.png',
    lstm: 'images/lstm.png',
    lstm_attention: 'images/lstm_attention.png',
    lstm_drop: 'images/lstm_drop.png',
    transformer: 'images/transformer.png',
  };
  const modelImage = document.getElementById('modelImage');
  modelImage.src = imageMap[model];
  modelImage.alt = model + " architecture";
}
