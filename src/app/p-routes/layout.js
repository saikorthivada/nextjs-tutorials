export default function ParallelRoutesLayout({children,
left,
right}) {
    return (
        <div>
            {children}
            <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
            {left}
            {right}
            </div>
        </div>
    )
}