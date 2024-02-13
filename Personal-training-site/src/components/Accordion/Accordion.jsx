import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import * as React from 'react'
import styles from './Accordion.module.scss'

function AccordionUsage(
	{ accordionTitle,
		description,
		AccordionId,
		Expanded,
		handleChange }) {

	return (
		<div className={styles.accordion__wrapper}>
			<Accordion expanded={Expanded === `panel${AccordionId}`} onChange={handleChange(`panel${AccordionId}`)}
				sx={{
					border: 'none',
					boxShadow: 'none',
					marginTop: '20px'
				}}>
				<AccordionSummary
					sx={{
						padding: '0',
					}}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<p className={styles.accordion__title}>{accordionTitle}</p>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						{description.map((field, index) => (
							<li key={index} className={styles.accordion__field}>
								- {field}
							</li>))}
					</ul>
				</AccordionDetails>
			</Accordion>
		</div >
	)
}
export default AccordionUsage