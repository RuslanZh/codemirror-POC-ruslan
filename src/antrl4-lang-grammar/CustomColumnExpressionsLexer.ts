// Generated from ./src/antrl4-lang-grammar/CustomColumnExpressions.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

export class CustomColumnExpressionsLexer extends Lexer {
	public static readonly ASTERISK = 1;
	public static readonly SLASH = 2;
	public static readonly PLUS = 3;
	public static readonly MINUS = 4;
	public static readonly EQUAL = 5;
	public static readonly NOT_EQUAL = 6;
	public static readonly GREATER_THAN = 7;
	public static readonly LESS_THAN = 8;
	public static readonly GREATER_OR_EQUAL = 9;
	public static readonly LESS_OR_EQUAL = 10;
	public static readonly CIRCUMFLEX = 11;
	public static readonly CONCAT = 12;
	public static readonly TRIM = 13;
	public static readonly LEN = 14;
	public static readonly TO_STRING = 15;
	public static readonly LOWER = 16;
	public static readonly UPPER = 17;
	public static readonly LEFT = 18;
	public static readonly RIGHT = 19;
	public static readonly MID = 20;
	public static readonly SUBSTITUTE = 21;
	public static readonly REPLACE = 22;
	public static readonly MOD = 23;
	public static readonly ABS = 24;
	public static readonly DATE_DIFF = 25;
	public static readonly TO_NUMERIC = 26;
	public static readonly DAY = 27;
	public static readonly WEEK = 28;
	public static readonly WEEKDAY = 29;
	public static readonly MONTH = 30;
	public static readonly YEAR = 31;
	public static readonly HOUR = 32;
	public static readonly MINUTE = 33;
	public static readonly FIND = 34;
	public static readonly AND = 35;
	public static readonly OR = 36;
	public static readonly XOR = 37;
	public static readonly NOT = 38;
	public static readonly EXACT = 39;
	public static readonly TO_BOOL = 40;
	public static readonly NOW = 41;
	public static readonly TO_DATE = 42;
	public static readonly IF = 43;
	public static readonly BOOLEAN_VALUE = 44;
	public static readonly DATE_FORMAT = 45;
	public static readonly DATE_VALUE = 46;
	public static readonly NUMERIC_VALUE = 47;
	public static readonly COLUMN_NAME = 48;
	public static readonly STRING_VALUE = 49;
	public static readonly LPAREN = 50;
	public static readonly RPAREN = 51;
	public static readonly COMMA = 52;
	public static readonly WHITESPACE = 53;
	public static readonly ANY = 54;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
		"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "UNDERSCORE", 
		"LETTER", "DIGIT", "VALID_CHAR", "VALID_NAME", "TRUE", "FALSE", "ASTERISK", 
		"SLASH", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL", "GREATER_THAN", "LESS_THAN", 
		"GREATER_OR_EQUAL", "LESS_OR_EQUAL", "CIRCUMFLEX", "CONCAT", "TRIM", "LEN", 
		"TO_STRING", "LOWER", "UPPER", "LEFT", "RIGHT", "MID", "SUBSTITUTE", "REPLACE", 
		"MOD", "ABS", "DATE_DIFF", "TO_NUMERIC", "DAY", "WEEK", "WEEKDAY", "MONTH", 
		"YEAR", "HOUR", "MINUTE", "FIND", "AND", "OR", "XOR", "NOT", "EXACT", 
		"TO_BOOL", "NOW", "TO_DATE", "IF", "BOOLEAN_VALUE", "DATE_FORMAT", "DATE_VALUE", 
		"NUMERIC_VALUE", "COLUMN_NAME", "STRING_VALUE", "LPAREN", "RPAREN", "COMMA", 
		"WHITESPACE", "ANY",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'/'", "'+'", "'-'", "'='", "'<>'", "'>'", "'<'", "'>='", 
		"'<='", "'^'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ASTERISK", "SLASH", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL", 
		"GREATER_THAN", "LESS_THAN", "GREATER_OR_EQUAL", "LESS_OR_EQUAL", "CIRCUMFLEX", 
		"CONCAT", "TRIM", "LEN", "TO_STRING", "LOWER", "UPPER", "LEFT", "RIGHT", 
		"MID", "SUBSTITUTE", "REPLACE", "MOD", "ABS", "DATE_DIFF", "TO_NUMERIC", 
		"DAY", "WEEK", "WEEKDAY", "MONTH", "YEAR", "HOUR", "MINUTE", "FIND", "AND", 
		"OR", "XOR", "NOT", "EXACT", "TO_BOOL", "NOW", "TO_DATE", "IF", "BOOLEAN_VALUE", 
		"DATE_FORMAT", "DATE_VALUE", "NUMERIC_VALUE", "COLUMN_NAME", "STRING_VALUE", 
		"LPAREN", "RPAREN", "COMMA", "WHITESPACE", "ANY",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CustomColumnExpressionsLexer._LITERAL_NAMES, CustomColumnExpressionsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CustomColumnExpressionsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CustomColumnExpressionsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CustomColumnExpressions.g4"; }

	// @Override
	public get ruleNames(): string[] { return CustomColumnExpressionsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CustomColumnExpressionsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CustomColumnExpressionsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CustomColumnExpressionsLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x028\u02B0\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\xEF\n\x1F\x03 \x06 \xF2" +
		"\n \r \x0E \xF3\x03 \x07 \xF7\n \f \x0E \xFA\v \x03 \x03 \x06 \xFE\n " +
		"\r \x0E \xFF\x05 \u0102\n \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'" +
		"\x03(\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03,\x03" +
		"-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u013F\n0\x03" +
		"1\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x03" +
		"1\x051\u0150\n1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x052\u0163\n2\x033\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x053\u0176" +
		"\n3\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u0183" +
		"\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x05" +
		"5\u0192\n5\x036\x036\x036\x036\x036\x036\x036\x036\x036\x056\u019D\n6" +
		"\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x058\u01BB\n8\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x05;\u01D7\n;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x05>\u01F5\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03B\x03" +
		"B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0221\nD\x03E\x03E\x03E\x03" +
		"E\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x05J\u0243\nJ\x03K\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u025B\n" +
		"L\x03M\x03M\x03M\x03N\x03N\x05N\u0262\nN\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x05O\u026B\nO\x03O\x03O\x03O\x05O\u0270\nO\x03O\x03O\x05O\u0274" +
		"\nO\x03O\x03O\x03O\x05O\u0279\nO\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u0281" +
		"\nO\x03P\x03P\x03P\x03P\x03Q\x05Q\u0288\nQ\x03Q\x06Q\u028B\nQ\rQ\x0EQ" +
		"\u028C\x03Q\x03Q\x06Q\u0291\nQ\rQ\x0EQ\u0292\x05Q\u0295\nQ\x03R\x03R\x03" +
		"S\x03S\x07S\u029B\nS\fS\x0ES\u029E\vS\x03S\x03S\x03T\x03T\x03U\x03U\x03" +
		"V\x03V\x03W\x06W\u02A9\nW\rW\x0EW\u02AA\x03W\x03W\x03X\x03X\x03\u029C" +
		"\x02\x02Y\x03\x02\x02\x05\x02\x02\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02" +
		"\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02" +
		"\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02\x02#\x02\x02%\x02\x02\'" +
		"\x02\x02)\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02\x023\x02\x025\x02\x02" +
		"7\x02\x029\x02\x02;\x02\x02=\x02\x02?\x02\x02A\x02\x02C\x02\x02E\x02\x03" +
		"G\x02\x04I\x02\x05K\x02\x06M\x02\x07O\x02\bQ\x02\tS\x02\nU\x02\vW\x02" +
		"\fY\x02\r[\x02\x0E]\x02\x0F_\x02\x10a\x02\x11c\x02\x12e\x02\x13g\x02\x14" +
		"i\x02\x15k\x02\x16m\x02\x17o\x02\x18q\x02\x19s\x02\x1Au\x02\x1Bw\x02\x1C" +
		"y\x02\x1D{\x02\x1E}\x02\x1F\x7F\x02 \x81\x02!\x83\x02\"\x85\x02#\x87\x02" +
		"$\x89\x02%\x8B\x02&\x8D\x02\'\x8F\x02(\x91\x02)\x93\x02*\x95\x02+\x97" +
		"\x02,\x99\x02-\x9B\x02.\x9D\x02/\x9F\x020\xA1\x021\xA3\x022\xA5\x023\xA7" +
		"\x024\xA9\x025\xAB\x026\xAD\x027\xAF\x028\x03\x02\x1F\x04\x02CCcc\x04" +
		"\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04\x02IIii\x04" +
		"\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02NNnn\x04\x02OOoo\x04" +
		"\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTtt\x04\x02UUuu\x04" +
		"\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02ZZzz\x04\x02[[{{\x04" +
		"\x02\\\\||\x04\x02C\\c|\x03\x022;\x05\x02\v\f\x0F\x0F\"\"\x02\u02AE\x02" +
		"E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02" +
		"\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02" +
		"\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03" +
		"\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02" +
		"\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02" +
		"g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02" +
		"\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02" +
		"\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03" +
		"\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03" +
		"\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03" +
		"\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03" +
		"\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03" +
		"\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03" +
		"\x02\x02\x02\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03" +
		"\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5\x03" +
		"\x02\x02\x02\x02\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAB\x03" +
		"\x02\x02\x02\x02\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x03\xB1\x03" +
		"\x02\x02\x02\x05\xB3\x03\x02\x02\x02\x07\xB5\x03\x02\x02\x02\t\xB7\x03" +
		"\x02\x02\x02\v\xB9\x03\x02\x02\x02\r\xBB\x03\x02\x02\x02\x0F\xBD\x03\x02" +
		"\x02\x02\x11\xBF\x03\x02\x02\x02\x13\xC1\x03\x02\x02\x02\x15\xC3\x03\x02" +
		"\x02\x02\x17\xC5\x03\x02\x02\x02\x19\xC7\x03\x02\x02\x02\x1B\xC9\x03\x02" +
		"\x02\x02\x1D\xCB\x03\x02\x02\x02\x1F\xCD\x03\x02\x02\x02!\xCF\x03\x02" +
		"\x02\x02#\xD1\x03\x02\x02\x02%\xD3\x03\x02\x02\x02\'\xD5\x03\x02\x02\x02" +
		")\xD7\x03\x02\x02\x02+\xD9\x03\x02\x02\x02-\xDB\x03\x02\x02\x02/\xDD\x03" +
		"\x02\x02\x021\xDF\x03\x02\x02\x023\xE1\x03\x02\x02\x025\xE3\x03\x02\x02" +
		"\x027\xE5\x03\x02\x02\x029\xE7\x03\x02\x02\x02;\xE9\x03\x02\x02\x02=\xEE" +
		"\x03\x02\x02\x02?\xF1\x03\x02\x02\x02A\u0103\x03\x02\x02\x02C\u0108\x03" +
		"\x02\x02\x02E\u010E\x03\x02\x02\x02G\u0110\x03\x02\x02\x02I\u0112\x03" +
		"\x02\x02\x02K\u0114\x03\x02\x02\x02M\u0116\x03\x02\x02\x02O\u0118\x03" +
		"\x02\x02\x02Q\u011B\x03\x02\x02\x02S\u011D\x03\x02\x02\x02U\u011F\x03" +
		"\x02\x02\x02W\u0122\x03\x02\x02\x02Y\u0125\x03\x02\x02\x02[\u0127\x03" +
		"\x02\x02\x02]\u012E\x03\x02\x02\x02_\u013E\x03\x02\x02\x02a\u014F\x03" +
		"\x02\x02\x02c\u0162\x03\x02\x02\x02e\u0175\x03\x02\x02\x02g\u0182\x03" +
		"\x02\x02\x02i\u0191\x03\x02\x02\x02k\u019C\x03\x02\x02\x02m\u019E\x03" +
		"\x02\x02\x02o\u01BA\x03\x02\x02\x02q\u01BC\x03\x02\x02\x02s\u01C0\x03" +
		"\x02\x02\x02u\u01D6\x03\x02\x02\x02w\u01D8\x03\x02\x02\x02y\u01E3\x03" +
		"\x02\x02\x02{\u01F4\x03\x02\x02\x02}\u01F6\x03\x02\x02\x02\x7F\u01FE\x03" +
		"\x02\x02\x02\x81\u0204\x03\x02\x02\x02\x83\u0209\x03\x02\x02\x02\x85\u020E" +
		"\x03\x02\x02\x02\x87\u0220\x03\x02\x02\x02\x89\u0222\x03\x02\x02\x02\x8B" +
		"\u0226\x03\x02\x02\x02\x8D\u0229\x03\x02\x02\x02\x8F\u022D\x03\x02\x02" +
		"\x02\x91\u0231\x03\x02\x02\x02\x93\u0237\x03\x02\x02\x02\x95\u0244\x03" +
		"\x02\x02\x02\x97\u025A\x03\x02\x02\x02\x99\u025C\x03\x02\x02\x02\x9B\u0261" +
		"\x03\x02\x02\x02\x9D\u0280\x03\x02\x02\x02\x9F\u0282\x03\x02\x02\x02\xA1" +
		"\u0287\x03\x02\x02\x02\xA3\u0296\x03\x02\x02\x02\xA5\u0298\x03\x02\x02" +
		"\x02\xA7\u02A1\x03\x02\x02\x02\xA9\u02A3\x03\x02\x02\x02\xAB\u02A5\x03" +
		"\x02\x02\x02\xAD\u02A8\x03\x02\x02\x02\xAF\u02AE\x03\x02\x02\x02\xB1\xB2" +
		"\t\x02\x02\x02\xB2\x04\x03\x02\x02\x02\xB3\xB4\t\x03\x02\x02\xB4\x06\x03" +
		"\x02\x02\x02\xB5\xB6\t\x04\x02\x02\xB6\b\x03\x02\x02\x02\xB7\xB8\t\x05" +
		"\x02\x02\xB8\n\x03\x02\x02\x02\xB9\xBA\t\x06\x02\x02\xBA\f\x03\x02\x02" +
		"\x02\xBB\xBC\t\x07\x02\x02\xBC\x0E\x03\x02\x02\x02\xBD\xBE\t\b\x02\x02" +
		"\xBE\x10\x03\x02\x02\x02\xBF\xC0\t\t\x02\x02\xC0\x12\x03\x02\x02\x02\xC1" +
		"\xC2\t\n\x02\x02\xC2\x14\x03\x02\x02\x02\xC3\xC4\t\v\x02\x02\xC4\x16\x03" +
		"\x02\x02\x02\xC5\xC6\t\f\x02\x02\xC6\x18\x03\x02\x02\x02\xC7\xC8\t\r\x02" +
		"\x02\xC8\x1A\x03\x02\x02\x02\xC9\xCA\t\x0E\x02\x02\xCA\x1C\x03\x02\x02" +
		"\x02\xCB\xCC\t\x0F\x02\x02\xCC\x1E\x03\x02\x02\x02\xCD\xCE\t\x10\x02\x02" +
		"\xCE \x03\x02\x02\x02\xCF\xD0\t\x11\x02\x02\xD0\"\x03\x02\x02\x02\xD1" +
		"\xD2\t\x12\x02\x02\xD2$\x03\x02\x02\x02\xD3\xD4\t\x13\x02\x02\xD4&\x03" +
		"\x02\x02\x02\xD5\xD6\t\x14\x02\x02\xD6(\x03\x02\x02\x02\xD7\xD8\t\x15" +
		"\x02\x02\xD8*\x03\x02\x02\x02\xD9\xDA\t\x16\x02\x02\xDA,\x03\x02\x02\x02" +
		"\xDB\xDC\t\x17\x02\x02\xDC.\x03\x02\x02\x02\xDD\xDE\t\x18\x02\x02\xDE" +
		"0\x03\x02\x02\x02\xDF\xE0\t\x19\x02\x02\xE02\x03\x02\x02\x02\xE1\xE2\t" +
		"\x1A\x02\x02\xE24\x03\x02\x02\x02\xE3\xE4\t\x1B\x02\x02\xE46\x03\x02\x02" +
		"\x02\xE5\xE6\x07a\x02\x02\xE68\x03\x02\x02\x02\xE7\xE8\t\x1C\x02\x02\xE8" +
		":\x03\x02\x02\x02\xE9\xEA\t\x1D\x02\x02\xEA<\x03\x02\x02\x02\xEB\xEF\x05" +
		"9\x1D\x02\xEC\xEF\x05;\x1E\x02\xED\xEF\x057\x1C\x02\xEE\xEB\x03\x02\x02" +
		"\x02\xEE\xEC\x03\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF>\x03\x02\x02" +
		"\x02\xF0\xF2\x059\x1D\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02" +
		"\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\u0101\x03\x02" +
		"\x02\x02\xF5\xF7\x05=\x1F\x02\xF6\xF5\x03\x02\x02\x02\xF7\xFA\x03\x02" +
		"\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFD\x03\x02" +
		"\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x059\x1D\x02\xFC\xFE\x05;\x1E" +
		"\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02" +
		"\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102\x03" +
		"\x02\x02\x02\u0101\xF8\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102" +
		"@\x03\x02\x02\x02\u0103\u0104\x05)\x15\x02\u0104\u0105\x05%\x13\x02\u0105" +
		"\u0106\x05+\x16\x02\u0106\u0107\x05\v\x06\x02\u0107B\x03\x02\x02\x02\u0108" +
		"\u0109\x05\r\x07\x02\u0109\u010A\x05\x03\x02\x02\u010A\u010B\x05\x19\r" +
		"\x02\u010B\u010C\x05\'\x14\x02\u010C\u010D\x05\v\x06\x02\u010DD\x03\x02" +
		"\x02\x02\u010E\u010F\x07,\x02\x02\u010FF\x03\x02\x02\x02\u0110\u0111\x07" +
		"1\x02\x02\u0111H\x03\x02\x02\x02\u0112\u0113\x07-\x02\x02\u0113J\x03\x02" +
		"\x02\x02\u0114\u0115\x07/\x02\x02\u0115L\x03\x02\x02\x02\u0116\u0117\x07" +
		"?\x02\x02\u0117N\x03\x02\x02\x02\u0118\u0119\x07>\x02\x02\u0119\u011A" +
		"\x07@\x02\x02\u011AP\x03\x02\x02\x02\u011B\u011C\x07@\x02\x02\u011CR\x03" +
		"\x02\x02\x02\u011D\u011E\x07>\x02\x02\u011ET\x03\x02\x02\x02\u011F\u0120" +
		"\x07@\x02\x02\u0120\u0121\x07?\x02\x02\u0121V\x03\x02\x02\x02\u0122\u0123" +
		"\x07>\x02\x02\u0123\u0124\x07?\x02\x02\u0124X\x03\x02\x02\x02\u0125\u0126" +
		"\x07`\x02\x02\u0126Z\x03\x02\x02\x02\u0127\u0128\x05\x07\x04\x02\u0128" +
		"\u0129\x05\x1F\x10\x02\u0129\u012A\x05\x1D\x0F\x02\u012A\u012B\x05\x07" +
		"\x04\x02\u012B\u012C\x05\x03\x02\x02\u012C\u012D\x05)\x15\x02\u012D\\" +
		"\x03\x02\x02\x02\u012E\u012F\x05)\x15\x02\u012F\u0130\x05%\x13\x02\u0130" +
		"\u0131\x05\x13\n\x02\u0131\u0132\x05\x1B\x0E\x02\u0132^\x03\x02\x02\x02" +
		"\u0133\u0134\x05\x19\r\x02\u0134\u0135\x05\v\x06\x02\u0135\u0136\x05\x1D" +
		"\x0F\x02\u0136\u013F\x03\x02\x02\x02\u0137\u0138\x05\x19\r\x02\u0138\u0139" +
		"\x05\v\x06\x02\u0139\u013A\x05\x1D\x0F\x02\u013A\u013B\x05\x0F\b\x02\u013B" +
		"\u013C\x05)\x15\x02\u013C\u013D\x05\x11\t\x02\u013D\u013F\x03\x02\x02" +
		"\x02\u013E\u0133\x03\x02\x02\x02\u013E\u0137\x03\x02\x02\x02\u013F`\x03" +
		"\x02\x02\x02\u0140\u0141\x05)\x15\x02\u0141\u0142\x05\v\x06\x02\u0142" +
		"\u0143\x051\x19\x02\u0143\u0144\x05)\x15\x02\u0144\u0150\x03\x02\x02\x02" +
		"\u0145\u0146\x05)\x15\x02\u0146\u0147\x05\x1F\x10\x02\u0147\u0148\x05" +
		"7\x1C\x02\u0148\u0149\x05\'\x14\x02\u0149\u014A\x05)\x15\x02\u014A\u014B" +
		"\x05%\x13\x02\u014B\u014C\x05\x13\n\x02\u014C\u014D\x05\x1D\x0F\x02\u014D" +
		"\u014E\x05\x0F\b\x02\u014E\u0150\x03\x02\x02\x02\u014F\u0140\x03\x02\x02" +
		"\x02\u014F\u0145\x03\x02\x02\x02\u0150b\x03\x02\x02\x02\u0151\u0152\x05" +
		"\x19\r\x02\u0152\u0153\x05\x1F\x10\x02\u0153\u0154\x05/\x18\x02\u0154" +
		"\u0155\x05\v\x06\x02\u0155\u0156\x05%\x13\x02\u0156\u0163\x03\x02\x02" +
		"\x02\u0157\u0158\x05\x19\r\x02\u0158\u0159\x05\x1F\x10\x02\u0159\u015A" +
		"\x05/\x18\x02\u015A\u015B\x05\v\x06\x02\u015B\u015C\x05%\x13\x02\u015C" +
		"\u015D\x057\x1C\x02\u015D\u015E\x05\x07\x04\x02\u015E\u015F\x05\x03\x02" +
		"\x02\u015F\u0160\x05\'\x14\x02\u0160\u0161\x05\v\x06\x02\u0161\u0163\x03" +
		"\x02\x02\x02\u0162\u0151\x03\x02\x02\x02\u0162\u0157\x03\x02\x02\x02\u0163" +
		"d\x03\x02\x02\x02\u0164\u0165\x05+\x16\x02\u0165\u0166\x05!\x11\x02\u0166" +
		"\u0167\x05!\x11\x02\u0167\u0168\x05\v\x06\x02\u0168\u0169\x05%\x13\x02" +
		"\u0169\u0176\x03\x02\x02\x02\u016A\u016B\x05+\x16\x02\u016B\u016C\x05" +
		"!\x11\x02\u016C\u016D\x05!\x11\x02\u016D\u016E\x05\v\x06\x02\u016E\u016F" +
		"\x05%\x13\x02\u016F\u0170\x057\x1C\x02\u0170\u0171\x05\x07\x04\x02\u0171" +
		"\u0172\x05\x03\x02\x02\u0172\u0173\x05\'\x14\x02\u0173\u0174\x05\v\x06" +
		"\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0164\x03\x02\x02\x02\u0175\u016A" +
		"\x03\x02\x02\x02\u0176f\x03\x02\x02\x02\u0177\u0178\x05\x19\r\x02\u0178" +
		"\u0179\x05\v\x06\x02\u0179\u017A\x05\r\x07\x02\u017A\u017B\x05)\x15\x02" +
		"\u017B\u0183\x03\x02\x02\x02\u017C\u017D\x05\x19\r\x02\u017D\u017E\x05" +
		"\v\x06\x02\u017E\u017F\x05\r\x07\x02\u017F\u0180\x05)\x15\x02\u0180\u0181" +
		"\x05\x05\x03\x02\u0181\u0183\x03\x02\x02\x02\u0182\u0177\x03\x02\x02\x02" +
		"\u0182\u017C\x03\x02\x02\x02\u0183h\x03\x02\x02\x02\u0184\u0185\x05%\x13" +
		"\x02\u0185\u0186\x05\x13\n\x02\u0186\u0187\x05\x0F\b\x02\u0187\u0188\x05" +
		"\x11\t\x02\u0188\u0189\x05)\x15\x02\u0189\u0192\x03\x02\x02\x02\u018A" +
		"\u018B\x05%\x13\x02\u018B\u018C\x05\x13\n\x02\u018C\u018D\x05\x0F\b\x02" +
		"\u018D\u018E\x05\x11\t\x02\u018E\u018F\x05)\x15\x02\u018F\u0190\x05\x05" +
		"\x03\x02\u0190\u0192\x03\x02\x02\x02\u0191\u0184\x03\x02\x02\x02\u0191" +
		"\u018A\x03\x02\x02\x02\u0192j\x03\x02\x02\x02\u0193\u0194\x05\x1B\x0E" +
		"\x02\u0194\u0195\x05\x13\n\x02\u0195\u0196\x05\t\x05\x02\u0196\u019D\x03" +
		"\x02\x02\x02\u0197\u0198\x05\x1B\x0E\x02\u0198\u0199\x05\x13\n\x02\u0199" +
		"\u019A\x05\t\x05\x02\u019A\u019B\x05\x05\x03\x02\u019B\u019D\x03\x02\x02" +
		"\x02\u019C\u0193\x03\x02\x02\x02\u019C\u0197\x03\x02\x02\x02\u019Dl\x03" +
		"\x02\x02\x02\u019E\u019F\x05\'\x14\x02\u019F\u01A0\x05+\x16\x02\u01A0" +
		"\u01A1\x05\x05\x03\x02\u01A1\u01A2\x05\'\x14\x02\u01A2\u01A3\x05)\x15" +
		"\x02\u01A3\u01A4\x05\x13\n\x02\u01A4\u01A5\x05)\x15\x02\u01A5\u01A6\x05" +
		"+\x16\x02\u01A6\u01A7\x05)\x15\x02\u01A7\u01A8\x05\v\x06\x02\u01A8n\x03" +
		"\x02\x02\x02\u01A9\u01AA\x05%\x13\x02\u01AA\u01AB\x05\v\x06\x02\u01AB" +
		"\u01AC\x05!\x11\x02\u01AC\u01AD\x05\x19\r\x02\u01AD\u01AE\x05\x03\x02" +
		"\x02\u01AE\u01AF\x05\x07\x04\x02\u01AF\u01B0\x05\v\x06\x02\u01B0\u01BB" +
		"\x03\x02\x02\x02\u01B1\u01B2\x05%\x13\x02\u01B2\u01B3\x05\v\x06\x02\u01B3" +
		"\u01B4\x05!\x11\x02\u01B4\u01B5\x05\x19\r\x02\u01B5\u01B6\x05\x03\x02" +
		"\x02\u01B6\u01B7\x05\x07\x04\x02\u01B7\u01B8\x05\v\x06\x02\u01B8\u01B9" +
		"\x05\x05\x03\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01A9\x03\x02\x02\x02" +
		"\u01BA\u01B1\x03\x02\x02\x02\u01BBp\x03\x02\x02\x02\u01BC\u01BD\x05\x1B" +
		"\x0E\x02\u01BD\u01BE\x05\x1F\x10\x02\u01BE\u01BF\x05\t\x05\x02\u01BFr" +
		"\x03\x02\x02\x02\u01C0\u01C1\x05\x03\x02\x02\u01C1\u01C2\x05\x05\x03\x02" +
		"\u01C2\u01C3\x05\'\x14\x02\u01C3t\x03\x02\x02\x02\u01C4\u01C5\x05\t\x05" +
		"\x02\u01C5\u01C6\x05\x03\x02\x02\u01C6\u01C7\x05)\x15\x02\u01C7\u01C8" +
		"\x05\v\x06\x02\u01C8\u01C9\x05\t\x05\x02\u01C9\u01CA\x05\x13\n\x02\u01CA" +
		"\u01CB\x05\r\x07\x02\u01CB\u01D7\x03\x02\x02\x02\u01CC\u01CD\x05\t\x05" +
		"\x02\u01CD\u01CE\x05\x03\x02\x02\u01CE\u01CF\x05)\x15\x02\u01CF\u01D0" +
		"\x05\v\x06\x02\u01D0\u01D1\x057\x1C\x02\u01D1\u01D2\x05\t\x05\x02\u01D2" +
		"\u01D3\x05\x13\n\x02\u01D3\u01D4\x05\r\x07\x02\u01D4\u01D5\x05\r\x07\x02" +
		"\u01D5\u01D7\x03\x02\x02\x02\u01D6\u01C4\x03\x02\x02\x02\u01D6\u01CC\x03" +
		"\x02\x02\x02\u01D7v\x03\x02\x02\x02\u01D8\u01D9\x05)\x15\x02\u01D9\u01DA" +
		"\x05\x1F\x10\x02\u01DA\u01DB\x057\x1C\x02\u01DB\u01DC\x05\x1D\x0F\x02" +
		"\u01DC\u01DD\x05+\x16\x02\u01DD\u01DE\x05\x1B\x0E\x02\u01DE\u01DF\x05" +
		"\v\x06\x02\u01DF\u01E0\x05%\x13\x02\u01E0\u01E1\x05\x13\n\x02\u01E1\u01E2" +
		"\x05\x07\x04\x02\u01E2x\x03\x02\x02\x02\u01E3\u01E4\x05\t\x05\x02\u01E4" +
		"\u01E5\x05\x03\x02\x02\u01E5\u01E6\x053\x1A\x02\u01E6z\x03\x02\x02\x02" +
		"\u01E7\u01E8\x05/\x18\x02\u01E8\u01E9\x05\v\x06\x02\u01E9\u01EA\x05\v" +
		"\x06\x02\u01EA\u01EB\x05\x17\f\x02\u01EB\u01F5\x03\x02\x02\x02\u01EC\u01ED" +
		"\x05/\x18\x02\u01ED\u01EE\x05\v\x06\x02\u01EE\u01EF\x05\v\x06\x02\u01EF" +
		"\u01F0\x05\x17\f\x02\u01F0\u01F1\x05\x1D\x0F\x02\u01F1\u01F2\x05+\x16" +
		"\x02\u01F2\u01F3\x05\x1B\x0E\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01E7" +
		"\x03\x02\x02\x02\u01F4\u01EC\x03\x02\x02\x02\u01F5|\x03\x02\x02\x02\u01F6" +
		"\u01F7\x05/\x18\x02\u01F7\u01F8\x05\v\x06\x02\u01F8\u01F9\x05\v\x06\x02" +
		"\u01F9\u01FA\x05\x17\f\x02\u01FA\u01FB\x05\t\x05\x02\u01FB\u01FC\x05\x03" +
		"\x02\x02\u01FC\u01FD\x053\x1A\x02\u01FD~\x03\x02\x02\x02\u01FE\u01FF\x05" +
		"\x1B\x0E\x02\u01FF\u0200\x05\x1F\x10\x02\u0200\u0201\x05\x1D\x0F\x02\u0201" +
		"\u0202\x05)\x15\x02\u0202\u0203\x05\x11\t\x02\u0203\x80\x03\x02\x02\x02" +
		"\u0204\u0205\x053\x1A\x02\u0205\u0206\x05\v\x06\x02\u0206\u0207\x05\x03" +
		"\x02\x02\u0207\u0208\x05%\x13\x02\u0208\x82\x03\x02\x02\x02\u0209\u020A" +
		"\x05\x11\t\x02\u020A\u020B\x05\x1F\x10\x02\u020B\u020C\x05+\x16\x02\u020C" +
		"\u020D\x05%\x13\x02\u020D\x84\x03\x02\x02\x02\u020E\u020F\x05\x1B\x0E" +
		"\x02\u020F\u0210\x05\x13\n\x02\u0210\u0211\x05\x1D\x0F\x02\u0211\u0212" +
		"\x05+\x16\x02\u0212\u0213\x05)\x15\x02\u0213\u0214\x05\v\x06\x02\u0214" +
		"\x86\x03\x02\x02\x02\u0215\u0216\x05\r\x07\x02\u0216\u0217\x05\x13\n\x02" +
		"\u0217\u0218\x05\x1D\x0F\x02\u0218\u0219\x05\t\x05\x02\u0219\u0221\x03" +
		"\x02\x02\x02\u021A\u021B\x05\r\x07\x02\u021B\u021C\x05\x13\n\x02\u021C" +
		"\u021D\x05\x1D\x0F\x02\u021D\u021E";
	private static readonly _serializedATNSegment1: string =
		"\x05\t\x05\x02\u021E\u021F\x05\x05\x03\x02\u021F\u0221\x03\x02\x02\x02" +
		"\u0220\u0215\x03\x02\x02\x02\u0220\u021A\x03\x02\x02\x02\u0221\x88\x03" +
		"\x02\x02\x02\u0222\u0223\x05\x03\x02\x02\u0223\u0224\x05\x1D\x0F\x02\u0224" +
		"\u0225\x05\t\x05\x02\u0225\x8A\x03\x02\x02\x02\u0226\u0227\x05\x1F\x10" +
		"\x02\u0227\u0228\x05%\x13\x02\u0228\x8C\x03\x02\x02\x02\u0229\u022A\x05" +
		"1\x19\x02\u022A\u022B\x05\x1F\x10\x02\u022B\u022C\x05%\x13\x02\u022C\x8E" +
		"\x03\x02\x02\x02\u022D\u022E\x05\x1D\x0F\x02\u022E\u022F\x05\x1F\x10\x02" +
		"\u022F\u0230\x05)\x15\x02\u0230\x90\x03\x02\x02\x02\u0231\u0232\x05\v" +
		"\x06\x02\u0232\u0233\x051\x19\x02\u0233\u0234\x05\x03\x02\x02\u0234\u0235" +
		"\x05\x07\x04\x02\u0235\u0236\x05)\x15\x02\u0236\x92\x03\x02\x02\x02\u0237" +
		"\u0238\x05)\x15\x02\u0238\u0239\x05\x1F\x10\x02\u0239\u023A\x057\x1C\x02" +
		"\u023A\u023B\x05\x05\x03\x02\u023B\u023C\x05\x1F\x10\x02\u023C\u023D\x05" +
		"\x1F\x10\x02\u023D\u0242\x05\x19\r\x02\u023E\u023F\x05\v\x06\x02\u023F" +
		"\u0240\x05\x03\x02\x02\u0240\u0241\x05\x1D\x0F\x02\u0241\u0243\x03\x02" +
		"\x02\x02\u0242\u023E\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243" +
		"\x94\x03\x02\x02\x02\u0244\u0245\x05\x1D\x0F\x02\u0245\u0246\x05\x1F\x10" +
		"\x02\u0246\u0247\x05/\x18\x02\u0247\x96\x03\x02\x02\x02\u0248\u0249\x05" +
		")\x15\x02\u0249\u024A\x05\x1F\x10\x02\u024A\u024B\x057\x1C\x02\u024B\u024C" +
		"\x05\t\x05\x02\u024C\u024D\x05\x03\x02\x02\u024D\u024E\x05)\x15\x02\u024E" +
		"\u024F\x05\v\x06\x02\u024F\u025B\x03\x02\x02\x02\u0250\u0251\x05\t\x05" +
		"\x02\u0251\u0252\x05\x03\x02\x02\u0252\u0253\x05)\x15\x02\u0253\u0254" +
		"\x05\v\x06\x02\u0254\u0255\x05-\x17\x02\u0255\u0256\x05\x03\x02\x02\u0256" +
		"\u0257\x05\x19\r\x02\u0257\u0258\x05+\x16\x02\u0258\u0259\x05\v\x06\x02" +
		"\u0259\u025B\x03\x02\x02\x02\u025A\u0248\x03\x02\x02\x02\u025A\u0250\x03" +
		"\x02\x02\x02\u025B\x98\x03\x02\x02\x02\u025C\u025D\x05\x13\n\x02\u025D" +
		"\u025E\x05\r\x07\x02\u025E\x9A\x03\x02\x02\x02\u025F\u0262\x05A!\x02\u0260" +
		"\u0262\x05C\"\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0260\x03\x02\x02" +
		"\x02\u0262\x9C\x03\x02\x02\x02\u0263\u0264\x05;\x1E\x02\u0264\u0265\x05" +
		";\x1E\x02\u0265\u0266\x05;\x1E\x02\u0266\u0267\x05;\x1E\x02\u0267\u0268" +
		"\x07/\x02\x02\u0268\u026A\x05;\x1E\x02\u0269\u026B\x05;\x1E\x02\u026A" +
		"\u0269\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026C\x03\x02" +
		"\x02\x02\u026C\u026D\x07/\x02\x02\u026D\u026F\x05;\x1E\x02\u026E\u0270" +
		"\x05;\x1E\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02" +
		"\u0270\u0281\x03\x02\x02\x02\u0271\u0273\x05;\x1E\x02\u0272\u0274\x05" +
		";\x1E\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274" +
		"\u0275\x03\x02\x02\x02\u0275\u0276\x071\x02\x02\u0276\u0278\x05;\x1E\x02" +
		"\u0277\u0279\x05;\x1E\x02\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03" +
		"\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x071\x02\x02\u027B" +
		"\u027C\x05;\x1E\x02\u027C\u027D\x05;\x1E\x02\u027D\u027E\x05;\x1E\x02" +
		"\u027E\u027F\x05;\x1E\x02\u027F\u0281\x03\x02\x02\x02\u0280\u0263\x03" +
		"\x02\x02\x02\u0280\u0271\x03\x02\x02\x02\u0281\x9E\x03\x02\x02\x02\u0282" +
		"\u0283\x07)\x02\x02\u0283\u0284\x05\x9DO\x02\u0284\u0285\x07)\x02\x02" +
		"\u0285\xA0\x03\x02\x02\x02\u0286\u0288\x07/\x02\x02\u0287\u0286\x03\x02" +
		"\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u028A\x03\x02\x02\x02\u0289" +
		"\u028B\x05;\x1E\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02" +
		"\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u0294" +
		"\x03\x02\x02\x02\u028E\u0290\x070\x02\x02\u028F\u0291\x05;\x1E\x02\u0290" +
		"\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0290\x03\x02" +
		"\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0295\x03\x02\x02\x02\u0294" +
		"\u028E\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\xA2\x03\x02\x02" +
		"\x02\u0296\u0297\x05? \x02\u0297\xA4\x03\x02\x02\x02\u0298\u029C\x07)" +
		"\x02\x02\u0299\u029B\v\x02\x02\x02\u029A\u0299\x03\x02\x02\x02\u029B\u029E" +
		"\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02" +
		"\u029D\u029F\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A0\x07" +
		")\x02\x02\u02A0\xA6\x03\x02\x02\x02\u02A1\u02A2\x07*\x02\x02\u02A2\xA8" +
		"\x03\x02\x02\x02\u02A3\u02A4\x07+\x02\x02\u02A4\xAA\x03\x02\x02\x02\u02A5" +
		"\u02A6\x07.\x02\x02\u02A6\xAC\x03\x02\x02\x02\u02A7\u02A9\t\x1E\x02\x02" +
		"\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02A8\x03" +
		"\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC" +
		"\u02AD\bW\x02\x02\u02AD\xAE\x03\x02\x02\x02\u02AE\u02AF\v\x02\x02\x02" +
		"\u02AF\xB0\x03\x02\x02\x02\"\x02\xEE\xF3\xF8\xFD\xFF\u0101\u013E\u014F" +
		"\u0162\u0175\u0182\u0191\u019C\u01BA\u01D6\u01F4\u0220\u0242\u025A\u0261" +
		"\u026A\u026F\u0273\u0278\u0280\u0287\u028C\u0292\u0294\u029C\u02AA\x03" +
		"\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			CustomColumnExpressionsLexer._serializedATNSegment0,
			CustomColumnExpressionsLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CustomColumnExpressionsLexer.__ATN) {
			CustomColumnExpressionsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CustomColumnExpressionsLexer._serializedATN));
		}

		return CustomColumnExpressionsLexer.__ATN;
	}

}

