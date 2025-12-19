<script lang="ts">
    import { closeWindow, toggleMinimize, toggleMaximize } from "../stores/windowStore";
    import type { wType } from "../types/wType";
  
    export let startDrag: (e: MouseEvent, id: string, action: 'move' | 'resize') => void;
    export let window: wType;

    const aboutMe = {
      name: "John Carlo Alicdan Cosme",
      title: "Python/AI Developer",
      dateOfBirth: "January 07, 1990",
      address: "Medicion 2C Imus Cavite, Philippines",
      zipCode: "4103",
      email: "inmc050817@gmail.com",
      phone: "+63 977 318 9377",
      description: `A highly skilled Python developer and artificial intelligence expert with extensive experience in building scalable solutions for machine learning, deep learning, and automation. 

Passionate about leveraging AI to solve complex problems, I have successfully delivered projects across various domains, including natural language processing, computer vision, and predictive analytics. Proficient in Python frameworks like TensorFlow, PyTorch, and scikit-learn, I specialize in developing end-to-end AI pipelines, including data preprocessing, model training, and deployment on cloud platforms. Also specialize in building scalable and efficient backend systems, utilizing Nodejs, PHP and its frameworks like Express.js and Laravel and integrating databases such as MySQL, MongoDB and PostgreSQL. My hands-on experience includes working with MLOps tools like Docker, Kubernetes, and TensorRT to optimize model performance and deploy AI applications at scale. I stay updated with the latest AI trends, actively participate in tech communities, and contribute to open-source projects. Dedicated to pushing the boundaries of innovation through AI, I aim to empower organizations to harness the full potential of technology.`,
      projectsComplete: 86,
      socialLinks: {
        twitter: "https://x.com/John50401788185",
        facebook: "https://www.facebook.com/profile.php?id=61580879649700",
        telegram: "https://t.me/johncarlo2741"
      }
    };
</script>
  
<div class="bg-white h-full rounded-lg flex flex-col overflow-hidden font-sans">
  <!-- Blog Header -->
  <div class="bg-gray-100 px-2 py-2 flex items-center cursor-move border-b border-gray-200" on:mousedown={(e) => startDrag(e, window.id, "move")}>
    <div class="flex space-x-2 mr-4">
      <button class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none" on:click={() => closeWindow(window.id)}>
        <svg class="w-3 h-3 text-red-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none" on:click={() => toggleMinimize(window.id)}>
        <svg class="w-3 h-3 text-yellow-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M20 12H4" />
        </svg>
      </button>
      <button class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none" on:click={() => toggleMaximize(window.id)}>
        <svg class="w-3 h-3 text-green-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
        </svg>
      </button>
    </div>
    <div class="flex-grow text-center font-semibold">About Me</div>
    <div class="flex space-x-2">
      <a href={aboutMe.socialLinks.twitter} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-500 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href={aboutMe.socialLinks.facebook} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      <a href={aboutMe.socialLinks.telegram} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-400 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15.056-.213.06-.094.134-.16.237-.16.112 0 .32.04.444.28.06.12.2.42.258.576.06.18.12.27.18.27.06 0 .18-.09.3-.27.12-.18.24-.36.3-.45.06-.09.12-.15.18-.15.06 0 .12.03.18.15.06.12.06.21 0 .27-.06.06-.12.12-.18.21z"/>
        </svg>
      </a>
    </div>
  </div>
  
  <div class="flex-grow flex overflow-hidden">
    <div class="flex-1 overflow-y-auto bg-white p-8">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-2">{aboutMe.name}</h1>
          <h2 class="text-2xl text-gray-600 mb-6">{aboutMe.title}</h2>
        </div>

        <div class="prose prose-lg max-w-none mb-8">
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">{aboutMe.description}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  
<style>
  :global(.prose) {
    color: #374151;
  }
  
  :global(.prose p) {
    margin-bottom: 1rem;
  }
</style>
