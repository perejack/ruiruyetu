import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  // productData.ts
  { url: 'https://shop.mabati.com/wp-content/uploads/2022/01/Box-Profile.jpg', dest: 'public/images/products/box-profile.jpg' },
  { url: 'https://www.kenyabusiness.co.ke/wp-content/uploads/2019/07/Roman-tile.jpg', dest: 'public/images/products/romantile.jpg' },
  { url: 'https://royal-mabati.co.ke/wp-content/uploads/2022/01/versatile-2.jpg', dest: 'public/images/products/versatile.jpg' },
  { url: 'https://maishamabati.com/wp-content/uploads/2022/01/Maisha-Mabati-Shingle-Tile-1.jpg', dest: 'public/images/products/shingle-tile.jpg' },
  { url: 'https://i0.wp.com/dumu-mabati.co.ke/wp-content/uploads/2022/01/Dumu-Mabati-Classic.jpg', dest: 'public/images/products/classic.jpg' },
  { url: 'https://taifamabati.com/wp-content/uploads/2022/01/Taifa-Mabati-Zentile.jpg', dest: 'public/images/products/zentile.jpg' },
  { url: 'https://mabatiyetu.co.ke/wp-content/uploads/2022/01/Mabati-Yetu-Milano.jpg', dest: 'public/images/products/milano.jpg' },
  { url: 'https://rhinoroofing.co.ke/wp-content/uploads/2022/01/Rhino-Mabati-Roman-Long-Tile.jpg', dest: 'public/images/products/roman-long-tile.jpg' },
  { url: 'https://bluestarmabati.co.ke/wp-content/uploads/2022/01/Bluestar-Mabati-Orientile.jpg', dest: 'public/images/products/orientile.jpg' },
  { url: 'https://bluestarmabati.co.ke/wp-content/uploads/2022/01/Bluestar-Mabati-Bricktile.jpg', dest: 'public/images/products/bricktile.jpg' },
  { url: 'https://bluestarmabati.co.ke/wp-content/uploads/2022/01/Bluestar-Mabati-Corrugated.jpg', dest: 'public/images/products/corrugated.jpg' },
  { url: 'https://bluestarmabati.co.ke/wp-content/uploads/2022/01/Bluestar-Mabati-Eurotile.jpg', dest: 'public/images/products/eurotile.jpg' },
  { url: 'https://bluestarmabati.co.ke/wp-content/uploads/2022/01/Bluestar-Mabati-Interlocking-Tile.jpg', dest: 'public/images/products/interlocking-tile.jpg' },
  { url: 'https://bluestarmabati.co.ke/wp-content/uploads/2022/01/Bluestar-Mabati-Step-Tile.jpg', dest: 'public/images/products/step-tile.jpg' },
  { url: 'https://bluestarmabati.co.ke/wp-content/uploads/2022/01/Bluestar-Mabati-V-C-M-C.jpg', dest: 'public/images/products/v-c-m-c.jpg' },

  // Manufacturing.tsx
  { url: 'https://maishamabati.com/wp-content/uploads/2022/01/Maisha-Mabati-Quality-Assurance.jpg', dest: 'public/images/manufacturing/quality-assurance.jpg' },
  { url: 'https://maishamabati.com/wp-content/uploads/2022/01/Maisha-Mabati-Coil-slitting.jpg', dest: 'public/images/manufacturing/coil-slitting.jpg' },
  { url: 'https://imarishamabati.co.ke/wp-content/uploads/2022/01/Imarisha-Mabati-Roll-forming.jpg', dest: 'public/images/manufacturing/roll-forming.jpg' },
  { url: 'https://maishamabati.com/wp-content/uploads/2022/01/Maisha-Mabati-Pressing.jpg', dest: 'public/images/manufacturing/pressing-and-cutting.jpg' },
  { url: 'https://maishamabati.com/wp-content/uploads/2022/01/Maisha-Mabati-Packaging.jpg', dest: 'public/images/manufacturing/packaging-and-delivery.jpg' },

  // AboutSection.tsx
  { url: 'https://sc04.alicdn.com/kf/Hf995c1b4a4c54c17a7c7ef47693c32b8a.png_350x350.png', dest: 'public/images/about/ruiru-mabati-roofing.png' },

  // FloatingWhatsAppButton.tsx
  { url: 'https://i.pinimg.com/originals/f7/1f/fb/f71ffb7ad7db43ccc7b1466de418f254.jpg', dest: 'public/images/whatsapp-logo.jpg' },

  // Contact.tsx
  { url: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80&w=800', dest: 'public/images/contact/contact-hero.jpg' },

  // Hero.tsx
  { url: 'https://ruirumabati.co.ke/images/2023/07/02/ruiru-slide2.jpg', dest: 'public/images/hero-background.jpg' },

  // Products.tsx
  { url: 'https://shamajamabati.co.ke/wp-content/uploads/2024/04/Home-stick-1.jpg', dest: 'public/images/products-hero/products-hero-background.jpg' },
];

import https from 'https';

function downloadImage(url, dest, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error('Too many redirects'));
      return;
    }

    const destPath = path.resolve(__dirname, dest);
    const dir = path.dirname(destPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const requestOptions = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    const request = https.get(url, requestOptions, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Handle redirect
        console.log(`Redirecting to ${response.headers.location}`);
        downloadImage(response.headers.location, dest, redirectCount + 1)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }

      const file = fs.createWriteStream(destPath);
      response.pipe(file);

      file.on('finish', () => {
        file.close(() => {
          console.log(`Successfully downloaded ${url} to ${dest}`);
          resolve();
        });
      });

      file.on('error', (err) => {
        fs.unlink(destPath, () => {}); // Clean up failed download
        console.error(`Error writing to ${destPath}:`, err.message);
        reject(err);
      });
    });

    request.on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

async function main() {
  console.log('Starting image download...');
  for (const image of images) {
    try {
      console.log(`Processing ${image.url}...`);
      await downloadImage(image.url, image.dest);
    } catch (error) {
      console.error(`Failed to process image ${image.url}:`, error.message);
    }
  }
  console.log('Image download process finished.');
}

main().catch(err => {
  console.error('A critical error occurred in the download script:', err);
});
