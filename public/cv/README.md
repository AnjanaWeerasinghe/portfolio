# CV Setup Instructions

To add your CV for download:

## Steps:
1. **Create your CV** as a PDF file
2. **Name it** `AnjanaWeerasinghe.pdf`
3. **Place it** in the `public/cv/` folder

## File Structure:
```
portfolio/
├── public/
│   └── cv/
│       └── AnjanaWeerasinghe.pdf  <-- Put your CV here
├── src/
└── ...
```

## How it works:
- Files in the `public` folder are served directly by Vite
- The download button links to `/cv/AnjanaWeerasinghe.pdf`
- The `download` attribute suggests a filename when downloaded
- Users clicking "Download CV" will get your PDF file

## Alternative: Google Drive/Cloud Storage
If you prefer hosting the CV elsewhere:

1. Upload your CV to Google Drive, Dropbox, or similar
2. Get the direct download link
3. Replace the href in AboutSection.jsx:
   ```jsx
   href="https://drive.google.com/uc?id=YOUR_FILE_ID"
   ```

## Current Implementation:
The CV download button is in `src/components/AboutSection.jsx` and will:
- Serve the file from `public/cv/AnjanaWeerasinghe.pdf`
- Download with suggested name `AnjanaWeerasinghe_CV.pdf`
- Show hover effects on the button