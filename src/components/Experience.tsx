import { 
  Laptop, 
  MapPin, 
  Coins 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from './Section';

export function Experience() {
  const experience = {
    title: 'Intern - Adversity Solutions',
    project: 'FewDotNFT: Blockchain Platform for Indian Art NFTs',
    description:
      'Built a full-stack NFT marketplace for Indian art using Solidity, React.js, and Node.js. Enabled secure wallet transactions and decentralized storage with IPFS.',
    icon: <Coins className="text-green-400" size={40} />,
    features: [
      'Developed & deployed ERC721A smart contracts for efficient NFT minting',
      'Integrated MetaMask for secure wallet authentication',
      'Used IPFS for decentralized metadata and storage',
      'Enabled listing, buying, and royalty on Ethereum Sepolia',
      'Built admin dashboard & analytics using MongoDB and Firebase'
    ],
  };

  return (
    <Section id="Experience" className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Laptop className="text-blue-400" size={36} />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-gray-900/80 p-8 rounded-2xl border border-gray-700 w-full md:w-2/3"
        >
          <div className="mb-4">
            {experience.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
          <h4 className="text-xl font-semibold mb-2 text-gray-200">{experience.project}</h4>
          <p className="text-gray-300 mb-6 text-base">{experience.description}</p>
          <ul className="space-y-3">
            {experience.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-base text-gray-400">
                <MapPin size={16} className="text-blue-400 mt-1" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
