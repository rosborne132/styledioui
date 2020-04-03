import * as React from 'react'
import PropTypes from 'prop-types'

export const Button = ({
    buttonStyles,
    buttonText,
    isLoading = false,
    onClick
}) => {
    return (
        <button style={buttonStyles} onClick={onClick}>
            {isLoading ? 'loading...' : buttonText}
        </button>
    )
}

Button.propTypes = {
    /**
      Styles that override the default button component styles.
      */
    buttonStyles: PropTypes.shape({}),
    /**
      Text that is displayed on the button.
      */
    buttonText: PropTypes.string.isRequired,
    /**
      Boolean that alters the buttons loading state.
      */
    isLoading: PropTypes.bool,
    /**
      Callback function that is called on onClick
      */
    onClick: PropTypes.func
}
