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
