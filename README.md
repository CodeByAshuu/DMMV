# Dynamic Memory Management Visualizer (DMMV)

<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#93c5f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-memory-stick-icon lucide-memory-stick"><path d="M6 19v-3"/><path d="M10 19v-3"/><path d="M14 19v-3"/><path d="M18 19v-3"/><path d="M8 11V9"/><path d="M16 11V9"/><path d="M12 11V9"/><path d="M2 15h20"/><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"/></svg>" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="yellow" />
</svg>

A modern, interactive web application for visualizing dynamic memory allocation algorithms built with React, Vite, and TailwindCSS. Perfect for students, educators, and professionals learning about operating system memory management concepts.

## 🚀 Features

### Memory Visualization
- **Real-time Memory Layout**: Visual representation of memory blocks with color-coded states
- **Interactive Blocks**: Click on allocated blocks to deallocate them instantly  
- **Smooth Animations**: Engaging transitions for allocation and deallocation operations
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing

### Algorithm Implementation
- **First Fit**: Allocates the first available block that fits
- **Best Fit**: Finds the smallest block that accommodates the request
- **Worst Fit**: Uses the largest available block for allocation
- **Real-time Comparison**: Switch between algorithms and see immediate differences

### Advanced Analytics
- **Performance Metrics**: Track memory utilization, fragmentation levels, and efficiency
- **Live Statistics**: Real-time updates of memory usage and allocation patterns
- **Visual Progress Bars**: Intuitive display of memory health and performance
- **Fragmentation Analysis**: Detailed breakdown of memory waste and optimization opportunities

### User Experience
- **Modern UI**: Clean, professional interface with dark theme and gradient accents
- **Intuitive Controls**: Simple forms for process management and memory operations
- **Error Handling**: Clear feedback for invalid operations and helpful suggestions
- **Educational Tooltips**: Built-in explanations of algorithm behaviors and performance tips

## 🛠️ Technology Stack

- **Frontend**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with custom components and animations
- **Routing**: React Router for navigation between pages
- **Icons**: Lucide React for consistent, modern iconography

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeByAshuu/DMMV.git
   cd DMMV
   ```

2. **Install dependencies**
   ```bash
    npm install react@^18.3.1 react-dom@^18.3.1 react-router-dom@^7.8.1 lucide-react@^0.344.0

    npm install --save-dev @vitejs/plugin-react@^4.3.1 vite@^5.4.2 tailwindcss@^3.4.1 postcss@^8.4.35 autoprefixer@^10.4.18 eslint@^9.9.1 @eslint/js@^9.9.1 eslint-plugin-react-hooks@^5.1.0-rc.0 eslint-plugin-react-refresh@^0.4.11 globals@^15.9.0 @types/react@^18.3.5 @types/react-dom@^18.3.0
   ```
   Or
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist/` or `build` directory, ready for deployment.

## 🎯 How to Use

### Getting Started
1. **Navigate to Visualizer**: Click "Start Visualizing" on the home page or use the navbar
2. **Choose Algorithm**: Select from First Fit, Best Fit, or Worst Fit in the algorithm selector
3. **Add Processes**: Use the allocation form to create processes with specific memory requirements
4. **Watch Magic Happen**: See real-time visualization of memory allocation
5. **Analyze Performance**: Review statistics panel for insights into algorithm efficiency

### Process Management
- **Allocate Memory**: Enter process ID and memory size, then click "Allocate"
- **Deallocate Memory**: Either use the deallocation form or click directly on allocated blocks
- **Monitor Statistics**: Track fragmentation, utilization, and other key metrics
- **Reset Memory**: Use the reset button to start fresh with a clean memory state

### Understanding the Visualization
- **Blue Blocks**: Available free memory
- **Green Blocks**: Allocated memory with process ID
- **Orange Blocks**: Fragmented memory (small unusable blocks)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer with social links
│   ├── MemoryBlock.jsx # Individual memory block visualization
│   ├── ProcessForm.jsx # Forms for allocation/deallocation
│   ├── MemoryStats.jsx # Statistics dashboard
│   └── AlgorithmSelector.jsx # Algorithm selection and info
├── pages/              # Main application pages
│   ├── Home.jsx        # Landing page with features
│   └── Visualizer.jsx  # Main visualization interface
├── utils/              # Core logic and algorithms
│   ├── memoryManager.js # Memory management class
│   └── algorithms.js   # Allocation algorithm implementations
├── styles/
│   └── index.css       # Global styles and Tailwind imports
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 🧮 Algorithm Details

### First Fit
- **Time Complexity**: O(n)
- **Strategy**: Allocates the first block that fits
- **Pros**: Fast execution, simple implementation
- **Cons**: Can cause fragmentation at memory start
- **Best For**: Real-time systems requiring quick allocation

### Best Fit  
- **Time Complexity**: O(n)
- **Strategy**: Finds the smallest block that accommodates the request
- **Pros**: Minimizes memory waste, good utilization
- **Cons**: Can create many small unusable fragments
- **Best For**: Memory-constrained systems with varied allocation sizes

### Worst Fit
- **Time Complexity**: O(n)  
- **Strategy**: Uses the largest available block
- **Pros**: Leaves large blocks for future allocations
- **Cons**: May waste memory, poorest utilization
- **Best For**: Systems with predictable, similar-sized requests

## 🚀 Deployment

### GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Other Platforms
The application builds to static files and can be deployed on any static hosting service like Netlify, Firebase Hosting, or AWS S3.

## 🎓 Educational Use

This visualizer is perfect for:
- **Computer Science Students**: Understanding memory management concepts
- **Operating Systems Courses**: Interactive demonstrations of allocation algorithms  
- **Technical Interviews**: Explaining memory management strategies
- **Self-Learning**: Exploring system-level programming concepts

## 🤝 Contributing

I welcome contributions! Please feel free to:
- Report bugs or suggest features via GitHub issues
- Submit pull requests for improvements
- Share the project with students and educators
- Provide feedback on educational effectiveness

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with love for the computer science education community
- Inspired by the need for interactive learning tools in systems programming

---

**Happy Learning!** 🎉

Made with ❤️ by the CodeByAshuu(Sagar)