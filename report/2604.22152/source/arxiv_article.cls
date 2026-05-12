
%%======== Package options and base class ========

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{arxiv_article}
\LoadClassWithOptions{article}
\pdfoutput=1

% Layout 
\RequirePackage[top=2.75cm, bottom=2.5cm, left=2.5cm, right=2.5cm, columnsep=0.65cm]{geometry}
\RequirePackage{microtype}
\RequirePackage{placeins}
\RequirePackage{hyphenat}
\RequirePackage{setspace}
\RequirePackage{parskip}
\RequirePackage[latin, english]{babel}
\RequirePackage{lipsum}
\RequirePackage{etoolbox}
\RequirePackage{fancyhdr}
% normalem: keep standard \emph (italic); plain ulem replaces \emph with underline and breaks line breaks.
\RequirePackage[normalem]{ulem}
\DisableLigatures[f]{family=sf*} 
\RequirePackage{graphicx}
\RequirePackage{subcaption}


\RequirePackage{booktabs}
% \RequirePackage{nicematrix}
\RequirePackage{multirow}
\RequirePackage{bm}
\newcommand{\nm}[1]{#1}
\RequirePackage[most]{tcolorbox}
\RequirePackage{xcolor}

% \definecolor{themeblue}{HTML}{3AB4E8}
\definecolor{themeblue}{HTML}{000000}

\definecolor{themeabstract}{HTML}{000000}

\definecolor{themelink}{HTML}{2A6FB8}
\newcommand{\themeblue}[1]{{\bfseries\color{themeblue} #1}}

% References %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\RequirePackage{hyperref}
\RequirePackage[noabbrev,nameinlink]{cleveref}
\hypersetup{
  colorlinks,
  linkcolor=themelink,
  citecolor=themelink,
  urlcolor=themelink
}



\RequirePackage[numbers, sort&compress]{natbib}
\def\bibfont{\small}

%%======== Bibliography using bibtex ========
\addto{\captionsenglish}{\renewcommand{\refname}{References}}
\newcommand{\citeas}[1]{\Needspace*{8\baselineskip}\noindent\bibentry{#1}}



% Section and caption format 
\newcommand{\sectionfont}
{\fontsize{12}{10}\selectfont} 

\newcommand{\subsectionfont}
{\fontsize{11}{10}\selectfont} 

\RequirePackage{titlesec}
\titleformat*{\paragraph}{\itshape}
\titleformat*{\section}{\sectionfont\sffamily\bfseries\color{themeblue}}
\titleformat*{\subsection}{\subsectionfont\sffamily\bfseries\color{themeblue}}


\titleformat*{\subsubsection}{\normalsize\sffamily\bfseries\color{themeblue}}


\newcommand{\bffont}
{\fontsize{8.8}{10}\selectfont} 

\DeclareTextFontCommand{\textbf}{\bffont\bfseries\sffamily}



\RequirePackage{caption}
\DeclareCaptionLabelSeparator{custom}{}
\DeclareCaptionFormat{custom}{{\sffamily\textbf{#1 #2}} #3}
\captionsetup{singlelinecheck=true,format=custom,labelsep=custom,font=small}
\captionsetup[sub]{singlelinecheck=true,format=custom,labelsep=custom,font=small}


\RequirePackage[T1]{fontenc}
% ==========================================
% 1. 定义统一的无衬线字体族：bytesans
% ==========================================
\DeclareFontFamily{T1}{bytesans}{}

% 声明常规体 (m) 映射到 Medium 的度量文件和物理字体
\DeclareFontShape{T1}{bytesans}{m}{n}{<-> s * [1] bytesansmedium}{}
\pdfmapline{+bytesansmedium < fonts/ByteSans-Medium.ttf <T1-WGL4.enc}

% 声明粗体 (b/bx) 映射到 Bold 的度量文件 (即你命名为 bytesans.tfm 的文件) 和物理字体
\DeclareFontShape{T1}{bytesans}{b}{n}{<-> s * [1] bytesans}{}
\DeclareFontShape{T1}{bytesans}{bx}{n}{<-> ssub * bytesans/b/n}{}
\pdfmapline{+bytesans < fonts/ByteSans-Bold.ttf <T1-WGL4.enc}

% 设置默认无衬线字体
\renewcommand{\sfdefault}{bytesans}
\renewcommand{\rmdefault}{cmr}

% ==========================================
% 2. 兼容性保留
% ==========================================
% 因为你的 \affiliationformat 命令中硬编码了 \fontfamily{bytesansmedium}\selectfont
% 这里保留对 bytesansmedium 族的独立声明以防止该命令报错。
% （更严谨的做法是去掉 \affiliationformat 中的 \fontfamily 调用，直接依赖全局 sfdefault）
\DeclareFontFamily{T1}{bytesansmedium}{}
\DeclareFontShape{T1}{bytesansmedium}{m}{n}{<-> s * [1] bytesansmedium}{}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Authors, affiliations, infos %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\renewcommand\addtolist[5][]{
  \begingroup
    \if\relax#3\relax\def\sep{}\else\def\sep{#5}\fi
    \let\protect\@unexpandable@protect 
    \xdef#3{\expandafter{#3}\sep #4[#1]{#2}}%
  \endgroup
}

\newcommand{\authorfont}
{\fontsize{11.5}{13}\selectfont} 

\newcommand\authorlist{}
% #2 = name; #1 = affiliation / role superscripts; #3 = optional trailing (e.g.\ internship \thanks), printed after $^{#1}$.
\newcommand\authorformat[3][]{\authorfont {\sffamily #2$^{#1}$#3}}
% Args: [#1] affiliations, {#2} name, {#3} optional suffix (use {} if none). \unexpanded stops \thanks from firing during \xdef.
\renewcommand\author[3][]{
  \begingroup
    \ifdefempty{\authorlist}{\def\sep{}}{\def\sep{, }}%
    \let\protect\@unexpandable@protect
    \xdef\authorlist{\expandafter{\authorlist}\sep\authorformat[#1]{\unexpanded{#2}}{\unexpanded{#3}}}%
  \endgroup
}

\newcommand{\affiliationfont}
{\fontsize{10}{12}\selectfont}

\newcommand\affiliationlist{}
\newcommand\affiliationformat[2][]{{\affiliationfont {\fontfamily{bytesansmedium}\selectfont $^{#1}$#2}}}

\newcommand\affiliation[2][]{\addtolist[#1]{#2}{\affiliationlist}{\affiliationformat}{, }}

\newcommand{\contributionfont}
{\fontsize{10}{12}\selectfont}

\newcommand\contributionlist{}
\newcommand\contributionformat[2][]{{\contributionfont $^{#1}$#2}}
\newcommand\contribution[2][]{\addtolist[#1]{#2}{\contributionlist}{\contributionformat}{, }}
% Same as \contribution but inserts \par before this item (use so two lines are never merged).
\newcommand\contributionpar[2][]{\addtolist[#1]{#2}{\contributionlist}{\contributionformat}{\par}}

\newcommand{\checkdatafont}
{\fontsize{7.92}{10}\selectfont}

\newcommand\checkdatalist{}
\newcommand\checkdataformat[2][]{{\small {\checkdatafont\sffamily \bfseries #1:} #2}}
\newcommand\checkdata[2][]{\addtolist[#1]{#2}{\checkdatalist}{\checkdataformat}{\par}}


\newcommand{\abstractinfont}
{\fontsize{9.5}{11.5}\selectfont} 

\renewcommand{\abstract}[1]{\def\abstractlist{{\abstractinfont #1}}}
\newcommand{\email}[1]{\href{mailto:#1}{\texttt{#1}}}

% --- 新增：用于接收 main.tex 中的头图内容 ---
\newcommand{\@teaser}{}
\newcommand{\teaser}[1]{\renewcommand{\@teaser}{#1}}
% ---------------------------------------------

\renewcommand\date[1]{\checkdata[Date]{#1}}
\newcommand\correspondence[1]{\checkdata[Correspondence]{#1}}


\newcommand{\titlefont}
{\fontsize{17}{20}\selectfont} 

\renewcommand{\title}[1]{\newcommand{\titlelist}{\titlefont{\sffamily #1}}}


\newcommand{\abstractfont}
{\fontsize{12}{12}\selectfont} 

\newcommand{\beginabstract}{\abstractfont{\sffamily\bfseries \textcolor{themeabstract}{Abstract}\par}}

\newcommand{\beginappendix}{\appendix{\titlefont\sffamily \themeblue{Appendix}\par}}


\usepackage[subfigure]{tocloft}
\renewcommand{\cftsecleader}{\cftdotfill{\cftdotsep}}
\renewcommand{\cftsecfont}{\sffamily}
\renewcommand{\cftsecpagefont}{\sffamily\color{themeblue}}
\renewcommand{\cfttoctitlefont}
{\sffamily\sectionfont\color{themeblue}}


%%======== Header and Footer (first page): institutional logos ========
\fancypagestyle{firststyle}{
    \fancyhead[L]{%
        % -6mm 是向下拉的距离，[0pt][0pt] 告诉 LaTeX 忽略图片的高度占位
        \raisebox{-12mm}[0pt][0pt]{\includegraphics[height=10mm]{logo/logo.pdf}}\hspace{3mm}%
    }
    \fancyhead[R]{%
        % 右侧保持相同的下移数值
        \raisebox{-13mm}[0pt][0pt]{\includegraphics[height=12mm]{logo/toronto.pdf}}%
    }
}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}



% Title box rules
\newcommand{\@toptitlebar}{
  \themeblue{\hrule height 0.5pt }
  \vskip 4mm
}
\newcommand{\@bottomtitlebar}{
  \vskip 4mm
  \themeblue{\hrule height 0.5pt}
}

% Title row: optional left logo (PDF next to \texttt{paper.tex}).
% Symmetric left/right side strips keep the title geometrically centered on the line; logo is \raggedright in the left strip.
\newcommand{\echotitlelogofile}{echo_logo.pdf}
\newcommand{\echotitlelogosidefrac}{0.09}% narrow strips so the title column is wider (fewer line breaks)
\newcommand{\echotitlelogomidfrac}{0.82}% with \texttt{\echotitlelogosidefrac}${}=0.09$: three columns sum to~1
\newcommand{\echotitlelogomaxheight}{16mm}
\newcommand{\echotitlelogowidthfrac}{0.92}% slightly under full strip width: smaller glyph, reads a bit further left
\newcommand{\echotitlelogotitlefont}{\fontsize{16}{19}\selectfont}% slightly smaller than default \titlefont when logo is present (helps two-line title)
\newcommand{\printtitleechologo}{%
  \IfFileExists{\echotitlelogofile}{%
    \includegraphics[width=\echotitlelogowidthfrac\linewidth,height=\echotitlelogomaxheight,keepaspectratio]{\echotitlelogofile}%
  }{}%
}
\newcommand{\@printtitlewithlogo}{%
  \noindent
  \begin{minipage}[c]{\echotitlelogosidefrac\linewidth}
    \raggedright
    \printtitleechologo
  \end{minipage}%
  \begin{minipage}[c]{\echotitlelogomidfrac\linewidth}
    \centering
    \begingroup
    \renewcommand{\titlefont}{\echotitlelogotitlefont}%
    \titlelist\par
    \endgroup
  \end{minipage}%
  \begin{minipage}[c]{\echotitlelogosidefrac\linewidth}
    \mbox{}%
  \end{minipage}%
}
\newcommand{\@printtitlewithoutlogo}{%
  \centering
  \titlelist\par
}

\newcommand{\mymaketitle}{%
  \tcbset{enhanced}
  \tcbset{left=6mm}
  \tcbset{right=6mm}
  \tcbset{top=3mm}
  \tcbset{bottom=3mm}
  \tcbset{colback=white}  
  \tcbset{colframe=themeabstract} 
  \tcbset{boxrule=0.5pt} 
  \tcbset{before skip=0pt}
  \tcbset{grow to left by=1.5pt}
  \tcbset{grow to right by=1.5pt}
  \tcbset{arc=2.5mm}
      {
      \setlength{\parskip}{0mm}
      \centering
      \nohyphens
      %
      {
      \@toptitlebar
        \IfFileExists{\echotitlelogofile}{\@printtitlewithlogo}{\@printtitlewithoutlogo}%
        \@bottomtitlebar
      }
      % \vskip 6mm
      \vskip 3mm
      \authorlist
      % \vskip 3mm
      \vskip 1mm
      %
      \affiliationlist\par
      % \vskip 3mm
      \vskip 1mm
      %
      \contributionlist\par
      \vspace{-2mm}
      \@thanks
      \global\let\@thanks\@empty
    }
   \vskip 3mm   
   % --- 新增：如果 \teaser 被定义了，就渲染它 ---
  \ifdefempty{\@teaser}{}{
    \@teaser
    \vskip 4mm
  }
  % --------------------------------------------
  \begin{tcolorbox}
    \setlength{\parindent}{0cm}
    \setlength{\parskip}{0cm}

    %
    
    \begin{center}
        \beginabstract
        % \vskip 2mm
    \end{center}
    
    \abstractlist\par
    %
    \vskip 3mm
    %
    {
      \setlength{\parskip}{0cm}
      \ifdefempty{\checkdatalist}{\vspace*{0.65cm}}{\checkdatalist\par}
    }
  \end{tcolorbox}
  \tcbset{reset}
  \FloatBarrier
  \setcounter{footnote}{0}%
  \thispagestyle{firststyle}

}


\if@twocolumn%
\renewcommand{\maketitle}{
\twocolumn[%
 \vskip 3mm
  \mymaketitle
  \vskip 3mm
]
}%
\else%
\renewcommand{\maketitle}{
  \mymaketitle
  \vskip 3mm
}%
\fi
