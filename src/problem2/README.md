# Overview

- Server: https://code-challenge-99tech-henna.vercel.app/
- UI: ![alt text](image.png)

# Problem Assumptions

1. **Interchangeable Currencies for Enhanced UX**

   - Users can swap the input and output currencies to improve usability and efficiency.

2. **Editable Input and Output Fields**

   - Both the input and output currencies, as well as their respective amounts, can be edited by the user.

3. **Dynamic Recalculation**

   - Modifying the **Input Currency** or **Input Amount** will trigger an automatic recalculation of the **Output Amount**.
   - Similarly, editing the **Output Currency** or **Output Amount** will result in a recalculation of the **Input Amount**.

4. **Default Settings**

   - The default input currency is set to **USD**.
   - The default output currency is set to **ETH**.

5. **Real-Time Data Fetching**
   - Currency data and exchange rates are dynamically fetched from the API endpoint: [https://interview.switcheo.com/prices.json](https://interview.switcheo.com/prices.json).

## How to Run the Vite React Project

### Prerequisites

Ensure the following are installed on your machine:

1. **Node.js** (Recommended version: `18.x` or higher)
   - Download and install from [Node.js official site](https://nodejs.org/).
2. **npm** or **yarn** (Package managers)
   - npm is bundled with Node.js. Alternatively, install yarn by running: `npm install --global yarn`.

---

### Steps to Run the Project

1. **Clone the Repository**

   - Open your terminal or command prompt and run:
     ```bash
     git clone <repository_url>
     cd <project_directory>
     ```

2. **Install Dependencies**

   - Run the following command to install the required packages:
     ```bash
     npm install
     ```
     Or, if using yarn:
     ```bash
     yarn install
     ```

3. **Start the Development Server**

   - Use the following command to start the development server:
     ```bash
     npm run dev
     ```
     Or, if using yarn:
     ```bash
     yarn dev
     ```

4. **Access the Project in Your Browser**
   - Once the server is running, you'll see a message like this in the terminal:
     ```
     VITE v<version>  ready in <milliseconds>
     Local: http://localhost:5173/
     Network: http://<your_ip>:5173/
     ```
   - Open a browser and navigate to [http://localhost:5173/](http://localhost:5173/) to view the project.
