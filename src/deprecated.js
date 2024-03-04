import { useBlockProps, RichText } from '@wordpress/block-editor'

// This is the deprecated code from the 1.0.0 save.js, attributes and use of migrate because the text attribute was replace with content
const v1 = {
	'attributes': {
		'text': {
			'type': 'string',
			'default': 'Some text here!'
		}
	},
	migrate ({ text }) {
		return {
			content: text,
		}
	},
	save ({ attributes }) {
		return (
			<div {...useBlockProps.save()}>
				<RichText.Content
					tagName="p"
					value={attributes.text}
				/>
			</div>
		)
	}
}

export default [v1]
