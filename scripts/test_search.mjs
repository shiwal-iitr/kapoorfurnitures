import google from 'googlethis';

async function test() {
  console.log('Searching for images...');
  try {
    const images = await google.image('Royal Teak King Bed furniture', { safe: false });
    console.log('Found images:', images.length);
    if (images.length > 0) {
      console.log('First image URL:', images[0].url);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
