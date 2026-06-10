How to Implement a 360° Car Viewer
Now that you have all the raw image assets downloaded locally, you can easily build the 360-degree viewers for the exterior and interior of the cars.

Here are the two ways to use these images in your project.

1. Exterior 360 Viewer (The 72 Frames)
The exterior 360 effect is essentially a flipbook. You have 72 images (e.g., frame-01.jpg to frame-72.jpg). As the user clicks and drags horizontally on the image, you simply swap out the src attribute of the image tag to the next or previous frame.

Vanilla JS Implementation (No Dependencies)
You can build a lightweight 360 viewer using plain HTML and JavaScript:

html

<div id="car-viewer-container" style="cursor: grab; width: 100%; max-width: 800px;">
  <img id="car-image" src="/media/creta/creta-360/color-code/frame-01.jpg" alt="360 Car View" style="width: 100%; user-select: none;" draggable="false" />
</div>
<script>
  const totalFrames = 72;
  let currentFrame = 1;
  let isDragging = false;
  let startX = 0;
  const carImage = document.getElementById('car-image');
  const container = document.getElementById('car-viewer-container');
  // Preload all 72 images so the spinning is smooth
  const images = [];
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    const frameStr = i.toString().padStart(2, '0');
    // Adjust path based on your backend or local static folder
    img.src = `/media/creta/creta-360/color-code/frame-${frameStr}.jpg`;
    images.push(img);
  }
  function updateImage() {
    const frameStr = currentFrame.toString().padStart(2, '0');
    carImage.src = `/media/creta/creta-360/color-code/frame-${frameStr}.jpg`;
  }
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    container.style.cursor = 'grabbing';
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    // Calculate how far the mouse has moved
    const deltaX = e.clientX - startX;
    
    // Sensitivity: change frame every 10 pixels dragged
    if (Math.abs(deltaX) > 10) {
      if (deltaX > 0) {
        // Drag right -> spin left (decrement frame)
        currentFrame = currentFrame === 1 ? totalFrames : currentFrame - 1;
      } else {
        // Drag left -> spin right (increment frame)
        currentFrame = currentFrame === totalFrames ? 1 : currentFrame + 1;
      }
      
      updateImage();
      startX = e.clientX; // Reset startX for the next interval
    }
  });
  // You can also add touch events (touchstart, touchmove, touchend) for mobile support!
</script>
TIP

Production Libraries: If you want a more robust solution with built-in mobile swiping, momentum, and zooming, use a library like SpriteSpin or React-360-View if you are using React.

2. Interior 360 Viewer (Cube Map)
The interior images downloaded are called Cubemaps (face-1.jpg to face-6.jpg). These represent the 6 faces of a cube (Front, Back, Left, Right, Top, Bottom). The user is placed "inside" the cube, and the camera is rotated.

Because this requires rendering in 3D space, you cannot use simple DOM manipulation. You need WebGL.

Recommended Implementation
The absolute best and easiest library for rendering 360 degree interior panos from a cubemap is Pannellum.

Include Pannellum in your HTML:
html

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"/>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
Setup your viewer using your downloaded faces:
html

<div id="interior-panorama" style="width: 100%; height: 500px;"></div>
<script>
pannellum.viewer('interior-panorama', {
    "type": "cubemap",
    // Pannellum maps faces to these array elements:
    // [Front, Right, Back, Left, Up, Down]
    // You will need to test which downloaded face (1-6) maps to which side.
    "cubeMap": [
        "/media/creta/creta-interior/face-1.jpg", // front
        "/media/creta/creta-interior/face-2.jpg", // right
        "/media/creta/creta-interior/face-3.jpg", // back
        "/media/creta/creta-interior/face-4.jpg", // left
        "/media/creta/creta-interior/face-5.jpg", // top
        "/media/creta/creta-interior/face-6.jpg"  // bottom
    ],
    "autoLoad": true,
    "mouseZoom": false
});
</script>
NOTE

If you are using React or Next.js, you can use wrappers like pannellum-react to easily implement this into your web application framework. You could also use Three.js, but Pannellum handles cubemaps automatically with much less boilerplate.