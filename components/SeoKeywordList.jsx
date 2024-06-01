import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter} from '@/components/ui/table'

console.log('server');
const SeoKeywordList = ({keywords}) => {
  return (
    <div>
      <h2 className="text-4xl mt-6 border-b-2 pb-4 mb-4 border-b-accent">Keyword Rankings</h2>
      {/* <ul className="grid grid-cols-1 text-left">
        {keywords.map((keyword, index) => (
          <li key={index} className='flex items-center justify-start xl:justify-start gap-4'>
            <span className='text-xl xl:text-sm'>
              <span>Platzierung:</span>
              {keyword.ranking}
            </span>
            <span className='text-white/60'>{keyword.name}</span>
          </li>
        ))}
      </ul> */}
      <Table>
      <TableCaption>Eine Listen der aktuellen Rankings vom 1.06.2024.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Position</TableHead>
          <TableHead>Keyword</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {keywords.map((keyword, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{keyword.ranking}</TableCell>
            <TableCell>{keyword.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>


  );
}

export default SeoKeywordList