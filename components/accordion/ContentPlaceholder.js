import { motion } from 'framer-motion';
import { mix } from 'popmotion';
import styles from '../../styles/hizmetlerimiz.module.css';

const randomInt = (min, max) => Math.round(mix(min, max, Math.random()))
const generateParagraphLength = () => randomInt(5, 20);
const generateWordLength = () => randomInt(20, 100);

const paragraphs = [...Array(3)].map(() => {
    return [...Array(generateParagraphLength())].map(generateWordLength);
})

export const Word = ({ width }) => <div className="word" style={{ width }} />;

const Paragraph = ({ words }) => (
    <div className={styles.paragraph}>
        {words.map(width => (
            <Word width={width} />
        ))}
    </div>
);

export const ContentPlaceholder = () => (
    <motion.div
        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
        transition={{ duration: 0.8 }}
        className={styles.content_placeholder}
    >
        {paragraphs.map(words => (
            <Paragraph words={words} />
        ))}
    </motion.div>
)