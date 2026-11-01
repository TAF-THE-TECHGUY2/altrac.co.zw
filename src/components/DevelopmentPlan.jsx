import { useEffect, useRef, useState } from 'react'
import { DEVELOPMENT as project, SOLD_STANDS, getStandStatus, DEVELOPMENT_RATE } from '../data/development'
import { waLink } from '../lib/site'

export default function DevelopmentPlan() {
  const [expanded, setExpanded] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('All')
  const dialog = useRef(null)
  const trigger = useRef(null)
  const status = getStandStatus(query)
  const total = Object.values(SOLD_STANDS).flat().length
  const hasMatches = Object.entries(SOLD_STANDS).some(([name, stands]) => (group === 'All' || group === name) && stands.some(number => !query || String(number).includes(query)))
  useEffect(() => {
    if (!expanded) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.current?.showModal()
    return () => { document.body.style.overflow = previous; trigger.current?.focus() }
  }, [expanded])
  const close = () => { dialog.current?.close(); setExpanded(false); setZoom(1) }
  return <>
    <div className="ce-plan-header"><p>The supplied drawing covers {project.planName}. Blue identifies the contractor allocation belonging to Chiswell / ALTRAC. Plan colours show allocation, rather than current sales status.</p><a href={project.layoutPdf} target="_blank" rel="noreferrer">Open original PDF ↗</a></div>
    <button className="ce-plan-preview" ref={trigger} onClick={() => setExpanded(true)} aria-label="Enlarge Railway Farm layout plan"><img src={project.layoutPlan} alt="Railway Farm 8 residential layout: blue contractor allocation, orange property developer, green local government, pink engineer, red town planner and yellow surveyor" loading="lazy"/><span>Explore the plan · Click to enlarge +</span></button>
    <p className="ce-plan-legend"><i aria-hidden="true"/> Blue: Chiswell / ALTRAC contractor allocation</p>
    <p className="ce-note">Supplied proposed roads and storm water drainage drawing · {project.drawingReference} · {project.drawingDate}. Ask our team for current servicing, approvals and stand details.</p>
    <div className="ce-availability"><div><span className="ce-eyebrow">Stand enquiries</span><h3>Have a stand number in mind?</h3><p>Check it against the supplied sold register, then contact our team to confirm availability.</p><label className="ce-lookup-label" htmlFor="stand-lookup">Stand number</label><input id="stand-lookup" className="ce-stand-input" type="text" inputMode="numeric" maxLength="4" placeholder="e.g. 7806" value={query} onChange={e => setQuery(e.target.value.replace(/\D/g, ''))}/><div className="ce-lookup-result" aria-live="polite">{status ? status.sold ? <p><strong>Stand {status.number} is sold.</strong><br/>Listed under {status.group} in the supplied register.</p> : <><p><strong>Stand {status.number}: availability to confirm.</strong><br/>This number is absent from the sold list. Our team must confirm its allocation and availability.</p><a className="ce-button ce-outline" href={waLink(`Hello ALTRAC, I’m interested in ${project.name}. Please confirm whether stand ${status.number} is part of your allocation and available at ${DEVELOPMENT_RATE}/m² including VAT.`)} target="_blank" rel="noreferrer">Enquire about stand {status.number} ↗</a></> : query ? <p>Enter a four-digit stand number.</p> : <p>Enter a stand number to check the sold register.</p>}</div></div>
    <div className="ce-sold-register"><div className="ce-register-heading"><span className="ce-eyebrow">Supplied sold register</span><strong>{total} sold</strong></div><div className="ce-register-filters" aria-label="Filter sold stands">{['All', ...Object.keys(SOLD_STANDS)].map(name => <button key={name} onClick={() => setGroup(name)} aria-pressed={group === name}>{name} ({name === 'All' ? total : SOLD_STANDS[name].length})</button>)}</div><div className="ce-sold-list">{Object.entries(SOLD_STANDS).filter(([name]) => group === 'All' || name === group).map(([name, numbers]) => <div key={name}><h4>{name} · {numbers.length} sold</h4><ul>{[...numbers].sort((a,b) => a-b).filter(number => !query || String(number).includes(query)).map(number => <li key={number}><button onClick={() => setQuery(String(number))} aria-label={`Check sold stand ${number}`}>{number}<span>Sold</span></button></li>)}</ul></div>)}{!hasMatches && <p className="ce-empty-register">No sold stands match this search in the selected group. Contact our team to confirm allocation and availability.</p>}</div><p className="ce-note">Sales status is based on the list supplied to ALTRAC and must be reconfirmed with our team.</p></div></div>
    {expanded && <dialog className="ce-plan-dialog" ref={dialog} onCancel={close} onClick={e => {if(e.target === e.currentTarget) close()}}><div className="ce-plan-toolbar"><span>{project.planName} · Layout plan</span><div><button onClick={() => setZoom(Math.max(1, zoom - .5))} aria-label="Zoom out" disabled={zoom <= 1}>−</button><span aria-live="polite">{Math.round(zoom*100)}%</span><button onClick={() => setZoom(Math.min(4, zoom + .5))} aria-label="Zoom in" disabled={zoom >= 4}>+</button><button onClick={() => setZoom(1)}>Fit</button><button onClick={close} autoFocus aria-label="Close layout plan">Close ×</button></div></div><div className="ce-plan-stage"><img src={project.layoutPlan} alt="Railway Farm 8 layout plan" style={{width:`${zoom*100}%`}}/></div><p>Use + to enlarge; scroll to move around the plan. Blue marks the contractor allocation.</p></dialog>}
  </>
}
