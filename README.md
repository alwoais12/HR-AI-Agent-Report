# AI HR Assistant - 3D Performance Report Simulator

This is an interactive 3D dashboard built with React, Three.js, and React Three Fiber.
It visualizes the aggregated performance metrics for **September & October**, along with future objectives.

## Getting Started

1.  **Install dependencies** (if you haven't):
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**:
    Navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Audio & Video Assets
The project uses external assets located in the `public/` folder:
-   `intro.mp4`: Video file. The intro animation syncs to this video's length and audio.
-   `bgm.mp3`: Background music ("Forest Walk").
-   `hover.wav`: Sound effect for button hovers.
-   `click.wav`: Sound effect for button clicks.

## Features
-   **Intro Animation**: Fast-cut UI montage synced to the intro video.
-   **Overview Tab**: Visualizes Participating vs Active Entities.
-   **Feedback Tab**: Shows Likes, Dislikes, and Development Notes.
-   **Services Tab**: Displays the status of all services.
-   **Next Steps**: Interactive 3D buttons for Nov/Dec objectives with sound effects and enhanced UI.

## Customizing Data

You can update the metrics in:
`src/data/report.ts`

## Controls
-   **Rotate**: Left Click + Drag
-   **Zoom**: Scroll
-   **Switch Category**: Use the buttons at the bottom
-   **Mute**: Toggle sound in the top right corner.
