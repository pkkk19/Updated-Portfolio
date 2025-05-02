
import { motion } from "framer-motion";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import RainAnimation from "@/components/RainAnimation";

const Index = () => {
  return (
    <main className="min-h-screen bg-background/50">
      <div className="background-image fixed inset-0 opacity-20" />
      <RainAnimation />
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-secondary"
            >
              Prabesh Kumar Shrestha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-8"
            >
              Data Scientist | Deep Learning Specialist | NLP Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <button className="px-8 py-3 rounded-full bg-secondary text-primary hover:bg-secondary/80 transition-colors font-medium">
                View Projects
              </button>
              <button className="px-8 py-3 rounded-full border border-secondary text-secondary hover:bg-secondary/10 transition-colors font-medium">
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-secondary rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-secondary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary mb-8">About Me</h2>
          <div className="glassmorphism p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-white/80 mb-4">
              A passionate Data Scientist and Deep Learning specialist with a strong foundation in Computer Science. Currently pursuing a Master's degree in Data Science, specializing in Deep Learning and Natural Language Processing.
            </p>
            <p className="text-white/80 mb-4">
              During my academic journey, I've developed expertise in building and deploying machine learning models, with a particular focus on NLP applications and neural network architectures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-secondary/20 rounded-lg p-4">
                <h3 className="text-secondary font-bold mb-2">Education</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Master's in Data Science (Current)</li>
                  <li>Bachelor's in Computer Science</li>
                </ul>
              </div>
              <div className="border border-secondary/20 rounded-lg p-4">
                <h3 className="text-secondary font-bold mb-2">Interests</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Deep Learning</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>Neural Network Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">Programming</h3>
              <ul className="space-y-2 text-white/80">
                <li>Python</li>
                <li>R</li>
                <li>SQL</li>
                <li>JavaScript/TypeScript</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">Machine Learning</h3>
              <ul className="space-y-2 text-white/80">
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>Scikit-learn</li>
                <li>Keras</li>
                <li>NLTK & spaCy</li>
              </ul>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">Tools & Technologies</h3>
              <ul className="space-y-2 text-white/80">
                <li>Docker</li>
                <li>Git</li>
                <li>AWS</li>
                <li>MLflow</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-2">Neural Machine Translation</h3>
              <p className="text-white/80 mb-4">
                Built a transformer-based translation model achieving 85% BLEU score on English-French translation tasks.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">PyTorch</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Transformers</span>
              </div>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-2">Sentiment Analysis API</h3>
              <p className="text-white/80 mb-4">
                Developed a real-time sentiment analysis API using BERT, deployed on AWS Lambda.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">BERT</span>
                <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary mb-8">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-2">Understanding Transformers</h3>
              <p className="text-white/80 mb-4">
                A deep dive into transformer architecture and its applications in modern NLP.
              </p>
              <span className="text-sm text-secondary/80">Posted on March 15, 2024</span>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-2">Deep Learning Best Practices</h3>
              <p className="text-white/80 mb-4">
                Essential tips and tricks for training deep neural networks effectively.
              </p>
              <span className="text-sm text-secondary/80">Posted on March 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary mb-8">Contact</h2>
          <div className="glassmorphism p-6 rounded-lg max-w-xl mx-auto">
            <p className="text-white/80 mb-6 text-center">
              Feel free to reach out for collaborations or just to say hi!
            </p>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-white/5 border border-secondary/20 text-white/80 placeholder:text-white/40" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/5 border border-secondary/20 text-white/80 placeholder:text-white/40" />
              </div>
              <div>
                <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-lg bg-white/5 border border-secondary/20 text-white/80 placeholder:text-white/40"></textarea>
              </div>
              <button className="w-full px-8 py-3 rounded-lg bg-secondary text-primary hover:bg-secondary/80 transition-colors font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
