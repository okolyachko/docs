# Alan syntax coloring

from pygments.style import Style
from pygments.token import Keyword, Name, Comment, String, Error, Number, Operator, Generic, Literal, Other

class AlanStyle(Style):
    default_style = ""
    styles = {

		Comment:                '#7899bf',
        Keyword:                '#49acff ',
		Keyword.Pseudo:         'italic #49acff',
		Keyword.Alan:           '#49acff',
		Keyword.Type:           '#c8c8cc ', 	
		Name.Attribute:         '#c8c8cc ',
        Name.Class:             '#c8c8cc ',
		Name.Builtin:          '#d88cff',
        Name.Function:         '#c8c8cc ',
        Name.Variable:         '#c8c8cc ',
		Name.Builtin.Pseudo:    '#c8c8cc ',
		Name.Tag:               '#c8c8cc ',
        Name.Decorator:         '#c8c8cc ',
		Name.Other: 			'#f6f6f6',
		Name: 	    			'#f6f6f6',
        String:                 '#ed9d13',
		String.Backtick:		'#f08d49',
		Number:                 '#ffc107',
		Literal.String.Interpol: '#f08d49',
    }
	
