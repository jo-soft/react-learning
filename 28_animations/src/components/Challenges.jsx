import { useContext, useState } from 'react';

import { ChallengesContext } from '../store/challenges-context.jsx';
import ChallengeItem from './ChallengeItem.jsx';
import ChallengeTabs from './ChallengeTabs.jsx';
import {motion, AnimatePresence} from "framer-motion";

export default function Challenges() {
  const { challenges } = useContext(ChallengesContext);
  const [selectedType, setSelectedType] = useState('active');
  const [expanded, setExpanded] = useState(null);

  function handleSelectType(newType) {
    setSelectedType(newType);
  }

  function handleViewDetails(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }

  const filteredChallenges = {
    active: challenges.filter((challenge) => challenge.status === 'active'),
    completed: challenges.filter(
      (challenge) => challenge.status === 'completed'
    ),
    failed: challenges.filter((challenge) => challenge.status === 'failed'),
  };

  const displayedChallenges = filteredChallenges[selectedType];

  return (
    <div id="challenges">
      <ChallengeTabs
        challenges={filteredChallenges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        <AnimatePresence mode='wait'>
        {displayedChallenges.length > 0 && (
          <motion.ol
              className="challenge-items"
              key='challenge-items'
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              exit='hidden'
              initial='hidden'
              animate='visible'
          >
            {displayedChallenges.map((challenge) => (
              <AnimatePresence>
                <ChallengeItem
                  key={challenge.id}
                  challenge={challenge}
                  onViewDetails={() => handleViewDetails(challenge.id)}
                  isExpanded={expanded === challenge.id}
                />
            </AnimatePresence>
            ))}
          </motion.ol>
        )}
        {displayedChallenges.length === 0 && <p key='empty'>No challenges found.</p>}
        </AnimatePresence>
      </ChallengeTabs>
    </div>
  );
}
