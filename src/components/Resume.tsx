import { motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>John Doe</Text>
      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        <Text style={styles.text}>Senior Full Stack Developer - Tech Corp</Text>
        <Text style={styles.text}>2020 - Present</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text style={styles.text}>BS in Computer Science</Text>
        <Text style={styles.text}>University of Technology</Text>
      </View>
    </Page>
  </Document>
);

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Resume({ isOpen, onClose }: ResumeProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 rounded-lg w-full max-w-4xl h-[80vh] relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Resume</h2>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
          <div className="flex-1 bg-white rounded-lg overflow-hidden">
            <PDFViewer width="100%" height="100%">
              <ResumePDF />
            </PDFViewer>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}