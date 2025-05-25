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

  const descriptionMap = {
    cnn: 'CNN is a convolution-based model that extracts local features from waveform data using 1D convolution layers.',
    lstm: 'LSTM captures temporal dependencies from seismic waveforms and is suitable for sequential patterns.',
    lstm_attention: 'LSTM + Attention allows the model to focus on the most relevant time steps during training.',
    lstm_drop: 'LSTM + Dropout applies regularization to prevent overfitting during training.',
    transformer: 'Transformer uses multi-head attention to model long-range dependencies in waveform sequences.',
  };

  const modelImage = document.getElementById('modelImage');
  const modelDescription = document.getElementById('modelDescription');

  modelImage.src = imageMap[model];
  modelImage.alt = model + " architecture";
  modelDescription.innerText = descriptionMap[model];
}
